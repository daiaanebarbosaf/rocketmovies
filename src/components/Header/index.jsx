import { Container, Profile, Search, Brand, Logout  } from './styles';

import { FiSearch } from 'react-icons/fi';

import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <Brand>
      <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          type="text"
          icon={FiSearch}
          />
      </Search>

      <Profile to="/profile">

        <div>
          <strong>Daiane Farias</strong>
        <Logout>
          Sair
        </Logout>
          
        </div>
        <img 
          src="https://github.com/daiaanebarbosaf.png" 
          alt="Foto do usuário(a)" 
        />

      </Profile>
    </Container>
  );
}