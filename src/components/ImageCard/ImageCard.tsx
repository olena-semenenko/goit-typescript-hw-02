import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard:React.FC<ImageCardProps> = ({ image, onPhotoClick, openModal }) => {
  const { description, alt_description, urls, likes, user } = image;
  const openModalByClick = (url:string) => {
    openModal();
    onPhotoClick(url);
  };

  return (
    <div className={css.card}>
      {image && <img src={urls.small} alt={image.alt_description ?? ''} onClick={() => openModalByClick(urls.regular)} />}
      <p>Author: {user.name}</p>
      <p>Likes: {likes}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default ImageCard;
