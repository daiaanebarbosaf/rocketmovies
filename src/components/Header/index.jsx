import { Container, Profile, Search, Brand, Logout  } from './styles';

import { FiSearch } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Input } from '../../components/Input';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
          <strong>{user.name}</strong>
        </div>
        <img 
          src={avatarUrl} 
          alt={user.name}
        />
      </Profile>

      <Logout onClick={signOut}>
        Sair
      </Logout>
    </Container>
  );
}