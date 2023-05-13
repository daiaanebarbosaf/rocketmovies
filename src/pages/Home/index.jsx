import { useState, useEffect } from 'react';

import { FiPlus } from 'react-icons/fi'; 

import { api } from '../../services/api';

import { Container, NewMovie, AddMovies, Content } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>
      <Header />

      <AddMovies>
        <h2>Meus filmes</h2>

        <NewMovie to="/new">
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </AddMovies>

      <main>
        <Content>
          <Note data={{
                title:'Interestellar',
                tags: [
                  {id: '1', name: 'Ficção Científica'},
                  {id: '2', name: 'Drama'}
                ]
              }}
          />
        </Content>
      </main>
    </Container>
  );
}