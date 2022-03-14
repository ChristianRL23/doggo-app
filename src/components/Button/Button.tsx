import './Button.scss';

interface ButtonProps {
  buttonTextContent: string;
}

const Button = ({ buttonTextContent }: ButtonProps) => {
  return <button className="button">{buttonTextContent}</button>;
};

export default Button;
