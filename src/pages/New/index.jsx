
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

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
		navigate(-1);
	}

  function handleAddTag(){

    if(newTag === ""){
      alert("Insira conteúdo na tag, você não pode deixar o campo está vazio");
    } else {
      setTags(prevState => [...prevState, newTag]); 
    }

    setNewTag("");
    console.log(newTag)
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota");
    }

    const isRatingValid = rating >= 0 && rating <= 5;

    if (!isRatingValid) {
      return alert("A nota do filme deve ser entre 0 e 5");
    }

    alert("Nota criada com sucesso!");
    navigate("/");

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    
  }

  return(
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <Link to="/" onClick={handleBack}>
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
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}

            />
          </div>

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)} 
          />

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