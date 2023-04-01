import { Container, Profile } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi'; 
import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      
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

    </Container>
  );
}