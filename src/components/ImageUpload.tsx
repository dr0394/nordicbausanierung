import { useState, useEffect } from 'react';
import { Upload, X, Image as ImageIcon, Loader2, Video } from 'lucide-react';
import { supabase, Image } from '../lib/supabase';

const STORAGE_BUCKET = 'gallery-images';

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'renovierung',
    isFeatured: true,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .order('uploaded_at', { ascending: false });

    if (error) {
      console.error('Error fetching images:', error);
    } else {
      setImages(data || []);
    }
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('Bitte wählen Sie nur Bild- oder Videodateien aus');
      return;
    }

    const maxSize = isVideo ? 104857600 : 5242880;
    if (file.size > maxSize) {
      alert(`Die Datei ist zu groß. Maximale Größe: ${isVideo ? '100MB' : '5MB'}`);
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Bitte wählen Sie eine Datei aus');
      return;
    }

    if (!formData.title.trim()) {
      alert('Bitte geben Sie einen Titel ein');
      return;
    }

    setUploading(true);

    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${formData.category}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(filePath, selectedFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase
        .from('images')
        .insert({
          title: formData.title,
          description: formData.description || null,
          file_path: filePath,
          file_url: urlData.publicUrl,
          category: formData.category,
          is_featured: formData.isFeatured,
        });

      if (dbError) throw dbError;

      alert('Datei erfolgreich hochgeladen!');

      setFormData({
        title: '',
        description: '',
        category: 'renovierung',
        isFeatured: true,
      });
      setSelectedFile(null);
      setPreviewUrl(null);
      fetchImages();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Fehler beim Hochladen der Datei');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (image: Image) => {
    alert('Löschen ist aus Sicherheitsgründen deaktiviert. Bitte implementieren Sie Authentifizierung für diese Funktion.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medien verwalten</h1>
          <p className="text-xl text-gray-600">Laden Sie Bilder und Videos hoch und verwalten Sie Ihre Galerie</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Neue Datei hochladen</h2>

            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bild oder Video auswählen
                </label>
                <div
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-all ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50 scale-105'
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                >
                  <div className="space-y-1 text-center">
                    {previewUrl ? (
                      <div className="relative">
                        {selectedFile?.type.startsWith('video/') ? (
                          <video src={previewUrl} controls className="mx-auto h-48 rounded-lg" />
                        ) : (
                          <img src={previewUrl} alt="Preview" className="mx-auto h-48 object-cover rounded-lg" />
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewUrl(null);
                            setSelectedFile(null);
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className={`mx-auto h-12 w-12 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                            <span>{isDragging ? 'Hier loslassen' : 'Datei auswählen oder hierher ziehen'}</span>
                            <input
                              type="file"
                              accept="image/*,video/*"
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">Bilder bis 5MB, Videos bis 100MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titel
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Titel eingeben"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beschreibung
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Beschreibung (optional)"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategorie
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="renovierung">Renovierung</option>
                  <option value="neubau">Neubau</option>
                  <option value="sanierung">Sanierung</option>
                  <option value="modernisierung">Modernisierung</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-700">
                  In Galerie anzeigen
                </label>
              </div>

              <button
                type="submit"
                disabled={uploading || !selectedFile}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {uploading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Wird hochgeladen...
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5 mr-2" />
                    Hochladen
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hochgeladene Dateien</h2>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-500">Noch keine Dateien hochgeladen</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {images.map((image) => (
                  <div key={image.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                    {image.file_url.match(/\.(mp4|webm|ogg)$/i) ? (
                      <div className="relative w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Video className="w-8 h-8 text-gray-400" />
                      </div>
                    ) : (
                      <img
                        src={image.file_url}
                        alt={image.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{image.title}</h3>
                      <p className="text-sm text-gray-600">{image.category}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(image.uploaded_at).toLocaleDateString('de-DE')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(image)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
