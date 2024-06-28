import { Image } from '../App/App.types';

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (largeImageURL: string) => void;
}

