import { StyledTitle, StyledTitleProps } from "./Title.styles";

type TitleProps = StyledTitleProps & {
  title: string;
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Title({
  title,
  heading,
  color,
  size,
  weight,
  underlined,
  underlineColor,
  underlineWidth,
}: TitleProps) {
  return (
    <StyledTitle
      as={heading}
      color={color}
      size={size}
      weight={weight}
      underlined={underlined}
      underlineColor={underlineColor}
      underlineWidth={underlineWidth}
    >
      {title}
    </StyledTitle>
  );
}
