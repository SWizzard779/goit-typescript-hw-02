import styles from './ImageModal.module.css';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ largeImageURL, onClose }) => {
  return (
    <Modal
      isOpen={!!largeImageURL}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Modal image"
    >
      <img
        src={largeImageURL}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt="Modal"
      />
    </Modal>
  );
};

export default ImageModal;