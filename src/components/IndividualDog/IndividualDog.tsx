import Modal from '../Modal/Modal';
import './IndividualDog.scss';

interface IndividualDogProps {
  closeModalFn: () => void;
}

const IndividualDog = ({ closeModalFn }: IndividualDogProps) => {
  return (
    <Modal closeFn={closeModalFn}>
      <h1>Hello</h1>
    </Modal>
  );
};

export default IndividualDog;
