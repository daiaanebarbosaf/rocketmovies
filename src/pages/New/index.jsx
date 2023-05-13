
import { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';


import { Container, Form, ButtonDelete } from './styles';

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  return(
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
            <FiArrowLeft/>
              Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>

          <div className="inputs">
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
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => {}}
                />
              ))
            }
            
            <NoteItem 
              isNew 
              placeholder="Novo Marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
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