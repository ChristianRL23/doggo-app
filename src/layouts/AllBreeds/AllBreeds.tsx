import { DogModel } from '../../models';
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
      <section className="all-breeds__dogs-grid">
        {dogData.map((dog) => (
          <p>{dog.name}</p>
        ))}
      </section>
    </main>
  );
};

export default AllBreeds;
