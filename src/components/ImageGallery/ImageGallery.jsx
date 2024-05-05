import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ collection, onPhotoClick, openModal }) => {
  return (
    <ul className={css.list}>
      {collection.map(item => (
        <li key={item.id}>
          <ImageCard image={item} onPhotoClick={onPhotoClick} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
