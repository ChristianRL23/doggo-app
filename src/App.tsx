import { useEffect, useState } from 'react';
import './App.scss';
import AllBreeds from './layouts/AllBreeds/AllBreeds';
import HeaderFooter from './layouts/HeaderFooter/HeaderFooter';
import Hero from './layouts/Hero/Hero';
import { DogModel } from './models';

function App() {
  const [dogData, setDogData] = useState<DogModel[]>([]);

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
      <HeaderFooter type="header" />
      <Hero dogData={dogData} />
      <AllBreeds dogData={dogData} />
    </div>
  );
}

export default App;
