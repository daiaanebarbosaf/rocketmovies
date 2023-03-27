import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details(){
  return(
    <Container>

      <Header />

      <main>
        <Content>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">Link 1</a></li>
            <li>Item 02</li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="Ficção Científica"/>
        </Section>

        <Button title="Entrar" />

      </Content>
      </main>

    </Container> 
  );
}