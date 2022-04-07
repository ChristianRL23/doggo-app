import SearchBar from '../../components/SearchBar/SearchBar';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content__texts">
          <h1>WHERE FRIENDSHIP BEGINS</h1>
          <p>Discover info and images about man's best friend, the doggo</p>
        </div>
        <SearchBar
          inputLabel="Search by breed"
          inputPlaceholder="e.g. Beagle"
        />
      </div>
    </section>
  );
};

export default Hero;
