import ReactDOM from 'react-dom';
import './Modal.scss';

interface BackdropProps {
  closeFn: () => void;
}

const Backdrop = ({ closeFn }: BackdropProps) => {
  return <div className="backdrop" onClick={closeFn} />;
};

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

interface ModalProps {
  closeFn: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, closeFn }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeFn={closeFn} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
