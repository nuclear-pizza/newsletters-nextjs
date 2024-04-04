import Image from "next/image";
import Button from "../Button";
import { StyledCard } from "./StyledCard.styles";
import Title from "../Title";

type CardProps = {
  title: string;
  src: string;
  alt?: string;
  content: string;
  ctaLabel: string;
  ctaColor?: string;
  ctaBgColor?: string;
};

export default function Card({
  title,
  src,
  alt,
  content,
  ctaLabel,
  ctaColor,
  ctaBgColor,
}: CardProps) {
  return (
    <StyledCard>
      <div>
        <Title title={title} color="#fff" size="1.375rem" weight="600" />
        <Image src={src} alt={alt || ""} width={150} height={150} />
      </div>
      <p>{content}</p>
      <Button color={ctaColor} background={ctaBgColor}>
        {ctaLabel}
      </Button>
    </StyledCard>
  );
}
