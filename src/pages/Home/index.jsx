import { FiPlus, FiSearch } from 'react-icons/fi'; 
import { Container, Brand, Menu,  Search, Content, NewMovie } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


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
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
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