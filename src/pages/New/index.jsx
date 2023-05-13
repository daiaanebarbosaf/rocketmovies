
import { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Container, Form, ButtonDelete } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    await api.post("/notes", {
      title,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate("/");
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
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setDescription(e.target.value)}

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
                  onClick={() => handleRemoveTag(tag)}
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
              <Button 
                title="Salvar" 
                onClick={handleNewNote}
              />
            </div>
          </div>
        </Form>
      </main>

    </Container>
  )
}