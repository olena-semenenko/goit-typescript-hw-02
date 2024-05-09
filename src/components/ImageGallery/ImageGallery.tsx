
import { Photos } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery:React.FC<ImageGalleryProps> = ({ collection, onPhotoClick, openModal }) => {
  return (
    <ul className={css.list}>
      {collection && collection.length > 0 && collection.map(item => (
        <li key={item.id}>
          <ImageCard image={item} onPhotoClick={onPhotoClick} openModal={openModal} />
        </li>
      ))}
      
    </ul>
  );
};

export default ImageGallery;
