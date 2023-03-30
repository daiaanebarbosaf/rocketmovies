import { FiPlus } from 'react-icons/fi'; 
import { Container, Brand, Menu,  Search, Content, NewMovie } from './styles';

import { Header } from '../../components/Header';


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Mymovies</h1>
      </Brand>

      <Header />

      <Menu>
    
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewMovie>
        <FiPlus />
        Adicionar filme
      </NewMovie>
    </Container>
  );
}