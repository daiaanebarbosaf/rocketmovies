import { Container, Profile, Search, Brand, Logout  } from './styles';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Header({}) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

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