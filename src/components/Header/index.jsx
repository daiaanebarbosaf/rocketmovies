import { Container, Profile, Search, Brand, Logout  } from './styles';

import { useAuth } from '../../hooks/auth';


export function Header({children}) {
  const { signOut } = useAuth();

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        {children}
      </Search>

      <Profile to="/profile">

        <div>
          <strong>Daiane Farias</strong>
        </div>
        <img 
          src="https://github.com/daiaanebarbosaf.png" 
          alt="Foto do usuário(a)" 
        />
      </Profile>

      <Logout onClick={signOut}>
        Sair
      </Logout>
    </Container>
  );
}