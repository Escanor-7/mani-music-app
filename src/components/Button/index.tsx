import { ButtonStyles } from './Button.styles';

interface ButtonComponentProps {
  children?: React.ReactNode;
  title?: string;
  variant?: string;
  onClick?: () => void;
  disable?: boolean;
}

export const Button = ({ children, title, variant, onClick, disable }: ButtonComponentProps) => {

  return (
    <ButtonStyles
      className={variant}
      onClick={onClick}
      disabled={disable}
    >
      {children}
      {title}
    </ButtonStyles>
  )
}