import { Photo } from "../App/App.types";

export type ImageCardProps ={
    image: Photo,
    onPhotoClick: (url: string) => void;
    openModal: () => void;
  
  }