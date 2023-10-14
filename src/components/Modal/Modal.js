import styles from './Modal.module.css';

const Modal = ({image, tags}) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={image} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
