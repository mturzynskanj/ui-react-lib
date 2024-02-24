type Props = {
  text: string;
};

const Button: React.FC = ({ text }: Props) => {
  return <button>{text}</button>;
};

export default Button;
