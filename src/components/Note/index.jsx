import { Container } from "./styles";

import { Tag } from "../Tag";

export function Note({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <img src="../../assets/stars.svg" alt="Estrelas rosinhas " />
      <p>
        Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; 
      </p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map( tag => 
              <Tag key={tag.id} title={tag.name}/>
            )
          }
        </footer>
      }
    </Container>
  )
}