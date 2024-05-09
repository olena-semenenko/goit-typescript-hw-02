export type ImageModalProps = {
    isOpen: boolean,
    onRequestClose: () => void,
    onOpenButton: () => void,
    content: string | null,
  };