import { Container } from "./styles";
import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Rating({isActive}) {
  return(
    <Container>
      <VscStarFull />
      <VscStarFull />
      <VscStarFull />
      <VscStarFull />
      <VscStarEmpty />
    </Container>
  )
}