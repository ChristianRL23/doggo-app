import { useContext } from 'react';
import ModalContext from '../../context/modalContext';
import DogsGrid from '../DogsGrid/DogsGrid';
import './AllBreeds.scss';

const AllBreeds = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <main className="all-breeds">
      <div className="all-breeds__section-description">
        <h2>All breeds</h2>
        <p>Meeting new friends is great. Don't be shy, discover some doggos!</p>
      </div>
      {modalCtx.dogData.length !== 0 && <DogsGrid itemsPerPage={9} />}
    </main>
  );
};

export default AllBreeds;
