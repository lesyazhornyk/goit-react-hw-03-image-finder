import styles from './Modal.module.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
