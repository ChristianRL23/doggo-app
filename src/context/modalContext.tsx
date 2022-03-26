import React from 'react';
import { useState } from 'react';
import { DogModel } from '../models';

interface ModalContextModel {
  modalIsOpen: boolean;
  breedSelected: string;
  closeModal: () => void;
  openModal: () => void;
  selectBreed: (breed: string) => void;
  setDogData: (data: DogModel[]) => void;
  dogData: DogModel[];
}

const ModalContext = React.createContext<ModalContextModel>({
  modalIsOpen: false,
  breedSelected: '',
  closeModal: () => {},
  openModal: () => {},
  selectBreed: () => {},
  setDogData: () => {},
  dogData: [],
});

interface ModalContextProviderProps {
  children: React.ReactNode;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [breedSelected, setBreedSelected] = useState<string>('');
  const [dogData, setDogData] = useState<DogModel[]>([]);

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  const selectBreed = (breed: string) => {
    openModal();
    setBreedSelected(breed);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        breedSelected,
        closeModal,
        openModal,
        selectBreed,
        dogData,
        setDogData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
