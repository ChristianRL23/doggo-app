import { useContext } from 'react';
import ModalContext from '../../context/modalContext';
import Modal from '../Modal/Modal';
import './IndividualDog.scss';

const IndividualDog = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <Modal closeFn={modalCtx.closeModal}>
      <h1>{modalCtx.breedSelected}</h1>
    </Modal>
  );
};

export default IndividualDog;
