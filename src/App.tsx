import { useEffect, useState } from 'react';
import './App.scss';
import IndividualDog from './components/IndividualDog/IndividualDog';
import AllBreeds from './layouts/AllBreeds/AllBreeds';
import HeaderFooter from './layouts/HeaderFooter/HeaderFooter';
import Hero from './layouts/Hero/Hero';
import { DogModel } from './models';

function App() {
  const [dogData, setDogData] = useState<DogModel[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchDogData = async () => {
      const respose = await fetch('https://api.thedogapi.com/v1/breeds');
      const data = await respose.json();
      setDogData(data);
    };
    fetchDogData();
  }, []);

  return (
    <div className="App">
      {modalOpen && <IndividualDog closeModalFn={closeModal} />}
      <HeaderFooter type="header" />
      <Hero dogData={dogData} />
      <AllBreeds dogData={dogData} />
      <HeaderFooter type="footer" />
    </div>
  );
}

export default App;
