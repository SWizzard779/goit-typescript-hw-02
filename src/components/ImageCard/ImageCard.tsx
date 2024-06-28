import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <div className={css.image_card} onClick={() => onClick(image.largeImageURL)}>
    <img className={css.photo} src={image.webformatURL} alt={image.description || 'Image'} />
  </div>
);

export default ImageCard;