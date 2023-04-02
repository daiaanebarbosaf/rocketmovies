import { FiPlus } from 'react-icons/fi'; 
import { Container, Brand, NewMovie, Content} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Mymovies</h1>
      </Brand>
      <Header />

      <Content>
        <h2>Meus filmes</h2>

        <NewMovie>
          <FiPlus />
          Adicionar filme
        </NewMovie>

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