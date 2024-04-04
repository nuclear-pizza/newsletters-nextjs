import { StyledButton, StyledButtonProps } from "./Button.styles";

type ButtonProps = StyledButtonProps & {
  children: React.ReactNode;
};

export default function Button({ color, background, children }: ButtonProps) {
  return (
    <StyledButton color={color} background={background}>
      {children}
    </StyledButton>
  );
}
