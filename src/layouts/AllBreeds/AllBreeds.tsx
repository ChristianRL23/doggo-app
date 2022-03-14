import { DogModel } from '../../models';
import DogsGrid from '../DogsGrid/DogsGrid';
import './AllBreeds.scss';

interface AllBreedsProps {
  dogData: DogModel[];
}

const AllBreeds = ({ dogData }: AllBreedsProps) => {
  return (
    <main className="all-breeds">
      <div className="all-breeds__section-description">
        <h2>All breeds</h2>
        <p>Meeting new friends is great. Don't be shy, discover some doggos!</p>
      </div>
      {dogData.length !== 0 && <DogsGrid itemsPerPage={9} dogData={dogData} />}
    </main>
  );
};

export default AllBreeds;
