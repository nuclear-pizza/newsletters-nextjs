import Title from "../shared/Title";
import { StyledNotice } from "./Notice.styles";

type props = {
  title: string;
  content: string;
};

export default function Notice({ title, content }: props) {
  return (
    <StyledNotice>
      <Title title={title} heading="h1" size="1.875rem" />
      <p>{content}</p>
    </StyledNotice>
  );
}
