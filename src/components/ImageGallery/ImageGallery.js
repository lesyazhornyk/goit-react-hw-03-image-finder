import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageObject={image}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
