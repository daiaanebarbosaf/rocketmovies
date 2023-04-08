import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';

import { Container, Brand, Content, Form } from './styles';

export function New() {
  return(
    <Container>
      <Brand>
        <h1>Mymovies</h1>
      </Brand>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">Voltar</a>
            <h1>Novo Filme</h1>
          </header>
          
          <Content>
            <Input 
              placeholder="Título"
            />
            <Textarea placeholder="Observações"/>
          </Content>

        </Form>
      </main>
    </Container>
  )
}