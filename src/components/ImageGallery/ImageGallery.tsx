import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGallery.types';

// export default function ImageGallery({ items, onClick }) {
//   return (
//     <ul className={css.gallerylist}>
//       {items.map(item => {
//         return (
//           <li key={item.id} className={css.gallerylist_item}>
//             <ImageCard photo={item} onClick={onClick} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallerylist}>
      {images.map((image) => (
        <li key={image.id} className={css.gallerylist_item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;