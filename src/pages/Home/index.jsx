import { FiPlus } from 'react-icons/fi'; 
import { Container, Brand, NewMovie, AddMovies, Content} from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Mymovies</h1>
      </Brand>
      <Header />

      <AddMovies>
        <h2>Meus filmes</h2>

        <NewMovie>
          <FiPlus />
          Adicionar filme
        </NewMovie>

      </AddMovies>

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

    </Container>
  );
}