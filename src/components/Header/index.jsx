import { Container, Profile, Search, Brand } from './styles';

import { FiSearch } from 'react-icons/fi';

import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <Brand>
      <h1>MyMovies</h1>
      </Brand>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          type="text"
          icon={FiSearch}
          />
      </Search>

      <Profile>

        <div>
          <strong>Daiane Farias</strong>
          <span>Sair</span>
        </div>
        <img 
          src="https://github.com/daiaanebarbosaf.png" 
          alt="Foto do usuário(a)" 
        />

      </Profile>
    </Container>
  );
}