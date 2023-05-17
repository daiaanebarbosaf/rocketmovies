import { useState, useEffect } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi'; 
import { api } from '../../services/api';

import { Container, NewMovie, AddMovies, Content } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';

export function Home() {


  return (
    <Container>
      <Header>
        
      <Input 
            className="input"
            placeholder="Pesquisar pelo título"
            type="text"
            icon={FiSearch}
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

        </Content>
      </main>
    </Container>
  );
}