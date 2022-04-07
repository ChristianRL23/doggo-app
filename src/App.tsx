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
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        if (response.ok === false)
          throw new Error('Something went wrong! Please reload the page.');
        const data = await response.json();
        modalCtx.setDogData(data);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchDogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
