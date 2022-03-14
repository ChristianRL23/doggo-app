import './Logo.scss';
import logoIconGray from './logo-icon-gray.svg';
import logoIconWhite from './logo-icon-white.svg';

interface LogoProps {
  color: 'gray' | 'white';
}

const Logo = ({ color }: LogoProps) => {
  return (
    <div className={`logo--${color}`}>
      <img
        src={color === 'gray' ? logoIconGray : logoIconWhite}
        alt="Logo icon"
      />
      <h6>DOGGO APP</h6>
    </div>
  );
};

export default Logo;
