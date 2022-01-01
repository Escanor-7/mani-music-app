import { ButtonStyles } from './Button.styles';

type ButtonComponentProps = {
  children?: React.ReactNode;
  title?: string;
  variant?: string;
  onClick?: () => void;
}

export const Button = ({ children, title, variant, onClick }: ButtonComponentProps) => {

  return (
    <ButtonStyles
      className={variant}
      onClick={onClick}
    >
      {children}
      {title}
    </ButtonStyles>
  )
}