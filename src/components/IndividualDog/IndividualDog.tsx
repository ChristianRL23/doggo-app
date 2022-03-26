import { useContext } from 'react';
import ModalContext from '../../context/modalContext';
import Modal from '../Modal/Modal';
import './IndividualDog.scss';

interface DogEntryProps {
  title: string;
  value: string;
  height?: boolean;
  weight?: boolean;
}

const DogEntry = ({ title, value, height, weight }: DogEntryProps) => {
  if (height || weight) {
    const valueSplitted = value.split(' - ');
    const newValue = valueSplitted.map(
      (word) => `${word}${height ? 'cm' : 'kg'}`
    );

    return (
      <div className="dog-entry">
        <h6>{title}:</h6>
        <p>
          {newValue[1] === undefined
            ? `${newValue[0]}`
            : `${newValue[0]} - ${newValue[1]}`}
        </p>
      </div>
    );
  }

  return (
    <div className="dog-entry">
      <h6>{title}:</h6>
      <p>{value}</p>
    </div>
  );
};

const IndividualDog = () => {
  const modalCtx = useContext(ModalContext);

  const currentDog = modalCtx.dogData.find(
    (dog) => dog.name === modalCtx.breedSelected
  );
  console.log(currentDog);

  return (
    <Modal closeFn={modalCtx.closeModal}>
      <div className="individual-dog">
        <img src={currentDog!.image.url} alt="Dog" />
        <div className="individual-dog__info">
          <h2>{currentDog?.name}</h2>
          <div className="individual-dog__info__entries">
            <DogEntry title="Bred for" value={currentDog!.bred_for} />
            <DogEntry title="Breed group" value={currentDog!.breed_group} />
            <DogEntry title="Life span" value={currentDog!.life_span} />
            <DogEntry title="Temperament" value={currentDog!.temperament} />
            <DogEntry height title="Height" value={currentDog!.height.metric} />
            <DogEntry weight title="Weight" value={currentDog!.weight.metric} />
          </div>
          <button
            onClick={modalCtx.closeModal}
            className="individual-dog__info__button"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default IndividualDog;
