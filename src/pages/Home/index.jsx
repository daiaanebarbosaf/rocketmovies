import { Container, Brand, Menu,  Search, Content, NewMovie } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Mymovies</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React"/></li>

      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewMovie>
        
      </NewMovie>
    </Container>
  );
}