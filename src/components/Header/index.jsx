import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';


export function Header() {
  return (
    <Container>

      <Profile>
        <div>
            <strong>Daiane Farias</strong>
            <span>sair</span>
        </div>

        <img 
          src="https://github.com/daiaanebarbosaf.png" 
          alt="Foto do usuário" 
        />
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}