import { Icon } from '../Icon';
import * as S from './Header.styles';


export const Header = () => {

  return (
    <S.Container>
      <Icon
        name='mani-music-logo'
        variant='header-logo'
        alt='mani-music-logo'
      />

      <a href='/' >Inicio</a>
      <a href='/favorits' >Favoritos</a>

      <S.Search>
        <input placeholder="Pesquisar por música, artista, album..." />
      </S.Search>

      <Icon
        name='user-icon'
        variant='user-icon'
        alt='user-icon'
      />
    </S.Container>
  )
}