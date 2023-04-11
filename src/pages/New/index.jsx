
import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';


import { Container, Form, ButtonDelete } from './styles';

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

          <div className="spacing-between">
            <Input 
              placeholder="Título"
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
            />
          </div>

          <Textarea placeholder="Observações"/>

          <Section title="Marcadores"/>
          <div className="spacing-between tags">
            <NoteItem value="Minions"/>
            <NoteItem value="Vingadores"/>
            <NoteItem isNew placeholder="Novo Marcador"/>
          </div>

          <div className="buttons-spacing-between">
            <ButtonDelete>
              Excluir filme
            </ButtonDelete>
            <div className="button-save">
              <Button title="Salvar" />
            </div>
          </div>
        </Form>
      </main>

    </Container>
  )
}