import Modal,{ Styles }  from 'react-modal';
import { ImageModalProps } from './ImageModal.types';

//default modal settings
const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(57, 55, 55, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const ImageModal:React.FC<ImageModalProps> = ({ isOpen, onRequestClose, onOpenButton, content }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Modal"
      >
        <div>
          {content && <img src={content} alt="" width="800" height="600" /> }
        </div>
      </Modal>
    </div>
  );
};
