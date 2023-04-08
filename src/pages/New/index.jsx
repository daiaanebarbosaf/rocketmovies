
import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function New() {
  return(
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <a href="/">
            <FiArrowLeft/>
              Voltar
            </a>
            <h1>Novo filme</h1>
          </header>

          <Input 
            placeholder="Título"
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)"
          />
          <Textarea placeholder="Observações"/>
        </Form>
      </main>

    </Container>
  )
}