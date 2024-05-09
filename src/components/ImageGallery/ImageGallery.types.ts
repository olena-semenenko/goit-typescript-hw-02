import { Photos } from "../App/App.types";

export type ImageGalleryProps ={
    collection: Photos | null;
    onPhotoClick: (url: string) => void;
    openModal: () => void;
  }