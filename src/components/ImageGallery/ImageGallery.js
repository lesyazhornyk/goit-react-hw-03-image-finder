import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} imageObject={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
