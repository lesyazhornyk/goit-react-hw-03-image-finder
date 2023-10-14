import styles from './ImageGalleryItem.module.css';
// import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ imageObject }) => {
  const { tags, webformatURL } = imageObject;

  // <Modal image={webformatURL} tags={tags} />
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
        onClick={() => {
          console.log('click', tags);
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;
