
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Skeleton } from './ui/skeleton';

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
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  // Extract image ID from ibb.co URLs for WebP version
  const getWebPUrl = (url: string) => {
    try {
      if (url.includes('ibb.co')) {
        // URLs like https://i.ibb.co/RrB4Pwc/IMG-6990.jpg
        const parts = url.split('/');
        const imageId = parts[parts.length - 2];
        const imageName = parts[parts.length - 1];
        return `https://i.ibb.co/${imageId}/${imageName.split('.')[0]}.webp`;
      }
    } catch (e) {
      console.error('Error parsing image URL:', e);
    }
    return url;
  };

  // Try to use WebP version first with fallback to original
  const webpSrc = getWebPUrl(src);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true); // Consider it loaded even if there's an error
  };

  // Get smaller image for preview
  const getLowQualityImageUrl = (url: string) => {
    try {
      if (url.includes('ibb.co')) {
        const parts = url.split('/');
        const imageId = parts[parts.length - 2];
        const imageName = parts[parts.length - 1];
        return `https://i.ibb.co/${imageId}/thumb_${imageName.split('.')[0]}.jpg`;
      }
    } catch (e) {
      console.error('Error parsing image URL for thumbnail:', e);
    }
    return url;
  };

  const thumbnailSrc = getLowQualityImageUrl(src);
  
  const imageElement = (
    <>
      {!isLoaded && !isError && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      <picture className={`${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={isError ? thumbnailSrc : src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          className={`${className} ${isError ? 'filter blur-sm' : ''}`}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </>
  );
  
  return (
    <>
      {aspectRatio ? (
        <AspectRatio ratio={aspectRatio} className={`relative ${className}`}>
          {imageElement}
        </AspectRatio>
      ) : (
        <div className="relative">
          {imageElement}
        </div>
      )}
    </>
  );
};

export default OptimizedImage;
