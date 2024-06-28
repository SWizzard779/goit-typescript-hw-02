import { Image } from '../ImageGallery/ImageGallery.types';

export interface ImageCardProps {
  image: Image;
  onClick: () => void;
}
