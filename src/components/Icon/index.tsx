import { IconStyles } from "./Icon.styles";

interface IconProps {
  name: string;
  variant?: string;
  width?: string;
  height?: string;
  alt: string;
}

export const Icon = ({ name, variant, width, height, alt }: IconProps) => {

  return (
    <>
      <IconStyles
        src={require(`../../assets/${name}.svg`)}
        className={variant}
        width={width}
        height={height}
        alt={alt}
        loading='lazy'
      />
    </>
  )
}