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

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => (
  <ul className="image-gallery">
    {images.map((image) => (
      <ImageCard key={image.id} image={image} onClick={() => onImageClick(image.largeImageURL)} />
    ))}
  </ul>
);

export default ImageGallery;