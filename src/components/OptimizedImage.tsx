
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  aspectRatio,
  priority = false,
  loading = 'lazy',
}) => {
  // Extract image ID from ibb.co URLs for WebP version
  const getWebPUrl = (url: string) => {
    if (url.includes('ibb.co')) {
      // URLs like https://i.ibb.co/RrB4Pwc/IMG-6990.jpg
      const parts = url.split('/');
      const imageId = parts[parts.length - 2];
      const imageName = parts[parts.length - 1];
      return `https://i.ibb.co/${imageId}/${imageName.split('.')[0]}.webp`;
    }
    return url;
  };

  // Try to use WebP version first with fallback to original
  const webpSrc = getWebPUrl(src);
  
  return (
    <>
      {aspectRatio ? (
        <AspectRatio ratio={aspectRatio} className={className}>
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? 'eager' : loading}
              className={`w-full h-full object-cover ${className}`}
              decoding="async"
            />
          </picture>
        </AspectRatio>
      ) : (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            className={className}
            decoding="async"
          />
        </picture>
      )}
    </>
  );
};

export default OptimizedImage;
