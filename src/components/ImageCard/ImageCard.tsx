import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

// export default function ImageCard({ photo, onClick }) {
//   return (
//     <div className={css.container}>
//       <img
//         onClick={() => onClick(photo.urls.regular, photo.description)}
//         className={css.photo}
//         src={photo.urls.small}
//         alt={photo.description}
//       />
//     </div>
//   );
// }

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <li className="image-card" onClick={onClick}>
    <img src={image.webformatURL} alt="" />
  </li>
);

export default ImageCard;