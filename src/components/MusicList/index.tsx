import * as S from './MusicList.styles';
import { Button } from '../Button/index';
import { Icon } from '../Icon';
import ManiMusicLogo from '../../assets/mani-music-logo.svg';
import { useState } from 'react';

interface MusicListProps {
  categoryTitle: string;
}

export const MusicList = ({categoryTitle}:MusicListProps) => {
  const [fillHeartIcon, setFillHeartIcon] = useState(false);

  return (
    <S.Container>
      <h2>{categoryTitle}</h2>
      <S.AlbumContent>
        <S.AlbumImg src={ManiMusicLogo} alt='logo-mani-music' />

        <h3>Te amar foi ilusão</h3>

        <p>De Gusttavo Lima</p>

        <Button variant='listen-button' >Ouvir</Button>

        {fillHeartIcon ? (
          <Button
            variant='transparent-button'
            onClick={() => setFillHeartIcon(false)}
          >
            <Icon
              name='heart-filled-icon'
              alt='heart-filled-icon'
              variant='heart-icon'
            />
          </Button>
        ) : (
          <Button
            variant='transparent-button'
            onClick={() => setFillHeartIcon(true)}
          >
            <Icon
              name='heart-icon'
              alt='heart-icon'
              variant='heart-icon'
            />
          </Button>
        )}

        <span>Duração: 3:12</span>
      </S.AlbumContent>
    </S.Container>
  )
}