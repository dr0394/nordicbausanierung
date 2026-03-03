import { useEffect, useRef, useState } from 'react';

const VIDEO_URL = 'https://kvfgqhuyudwuqqypopgl.supabase.co/storage/v1/object/public/gallery-images/renovierung/1772581562892-ljnf7d.MOV';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnd = () => {
      setFadeOut(true);
      setTimeout(onComplete, 600);
    };

    const handleError = () => {
      setFadeOut(true);
      setTimeout(onComplete, 300);
    };

    video.addEventListener('ended', handleEnd);
    video.addEventListener('error', handleError);

    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 600);
    }, 6000);

    return () => {
      video.removeEventListener('ended', handleEnd);
      video.removeEventListener('error', handleError);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: '600ms' }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        className="max-w-full max-h-full object-contain"
        style={{ maxWidth: '480px', width: '80vw' }}
      />
    </div>
  );
}
