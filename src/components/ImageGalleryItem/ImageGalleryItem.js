import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageObject, onImageClick }) => {
  const { tags, webformatURL } = imageObject;

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
        onClick={() => {
          onImageClick(webformatURL);
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;
