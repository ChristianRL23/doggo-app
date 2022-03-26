import { useContext, useEffect } from 'react';
import './App.scss';
import IndividualDog from './components/IndividualDog/IndividualDog';
import ModalContext from './context/modalContext';
import AllBreeds from './layouts/AllBreeds/AllBreeds';
import HeaderFooter from './layouts/HeaderFooter/HeaderFooter';
import Hero from './layouts/Hero/Hero';

function App() {
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    const fetchDogData = async () => {
      const respose = await fetch('https://api.thedogapi.com/v1/breeds');
      const data = await respose.json();
      modalCtx.setDogData(data);
    };
    fetchDogData();
  }, []);

  return (
    <>
      {modalCtx.modalIsOpen && <IndividualDog />}
      <HeaderFooter type="header" />
      <Hero />
      <AllBreeds />
      <HeaderFooter type="footer" />
    </>
  );
}

export default App;
