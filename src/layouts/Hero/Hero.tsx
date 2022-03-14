import SearchBar from '../../components/SearchBar/SearchBar';
import { DogModel } from '../../models';
import './Hero.scss';

interface HeroProps {
  dogData: DogModel[];
}

const Hero = ({ dogData }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content__texts">
          <h1>WHERE FRIENDSHIP BEGINS</h1>
          <p>Discover facts and images about man's best friend, the doggo</p>
        </div>
        <SearchBar
          dogData={dogData}
          inputLabel="Search by breeds"
          inputPlaceholder="e.g. Super Dog"
        />
      </div>
    </section>
  );
};

export default Hero;
