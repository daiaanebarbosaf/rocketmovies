import { useState } from 'react';
import { Container, Profile, Search, Brand, Logout  } from './styles';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Header({children}) {
  const { signOut } = useAuth();
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

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
          <strong>{user.name}</strong>
        </div>
        <img 
          src={avatar}
          alt={user.name} 
        />
      </Profile>

      <Logout onClick={signOut}>
        Sair
      </Logout>
    </Container>
  );
}