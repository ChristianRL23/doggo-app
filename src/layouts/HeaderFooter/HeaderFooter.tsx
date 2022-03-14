import Logo from '../../components/Logo/Logo';
import './HeaderFooter.scss';

interface HeaderFooterProps {
  type: 'header' | 'footer';
}

const HeaderFooter = ({ type }: HeaderFooterProps) => {
  if (type === 'header') {
    return (
      <header className="header">
        <Logo color="gray" />
      </header>
    );
  } else {
    return (
      <footer className="footer">
        <Logo color="white" />
      </footer>
    );
  }
};

export default HeaderFooter;
