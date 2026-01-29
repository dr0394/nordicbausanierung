/*
  # Remove Unused Indexes

  1. Changes
    - Drop unused index `idx_images_display_order`
    - Drop unused index `idx_images_is_featured`

  2. Rationale
    - These indexes are not being used by any queries
    - Removing unused indexes reduces storage overhead and improves write performance
*/

DROP INDEX IF EXISTS idx_images_display_order;
DROP INDEX IF EXISTS idx_images_is_featured;