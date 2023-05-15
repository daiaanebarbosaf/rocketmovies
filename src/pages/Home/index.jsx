import { useState, useEffect } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi'; 
import { api } from '../../services/api';

import { Container, Search, NewMovie, AddMovies, Content } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/note?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();

  }, [search]);

  return (
    <Container>
      <Header>
        <Input 
          placeholder="Pesquisar pelo título"
          type="text"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <AddMovies>
        <h2>Meus filmes</h2>

        <NewMovie to="/new">
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </AddMovies>

      <main>
        <Content>
          {
            notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note}
              />
            ))
          }

        </Content>
      </main>
    </Container>
  );
}