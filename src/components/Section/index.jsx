import { Container } from "./styles";

export function Section({ title, children }) {
  return(
    <Container>
      <h2>{ children }</h2>
    </Container>
  );
}