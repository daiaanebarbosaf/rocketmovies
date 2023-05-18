import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiPlus, FiSearch } from 'react-icons/fi'; 
import { api } from '../../services/api';

import { Container, NewMovie, AddMovies, Content } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies(){
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  },[search])

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
            movies.map(movie => (
              <Note 
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
          }
        </Content>
      </main>
    </Container>
  );
}