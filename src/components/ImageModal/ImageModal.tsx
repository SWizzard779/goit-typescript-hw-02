import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageMofal.types';

// export default function ImageModal({
//   isOpen,
//   onRequestClose,
//   modalImageUrl,
//   modalImageAlt,
// }) {
//   Modal.setAppElement('#root');
//   return (
//     <Modal
//       className={css.modal}
//       overlayClassName={css.overlay}
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Modal image"
//     >
//       <img
//         src={modalImageUrl}
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         alt={modalImageAlt}
//       />
//     </Modal>
//   );
// }

const ImageModal: React.FC<ImageModalProps> = ({ largeImageURL, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="modal">
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);

export default ImageModal;