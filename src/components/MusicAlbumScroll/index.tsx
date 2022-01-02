import { useState } from 'react';
import * as S from './MusicAlbumScroll.styles';
import { Button } from '../Button/index';
import { Icon } from '../Icon';
import ManiMusicLogo from '../../assets/mani-music-logo.svg';
import Carousel from 'react-elastic-carousel'

interface MusicListProps {
  categoryTitle: string;
}

export const MusicAlbumScroll = ({ categoryTitle }: MusicListProps) => {
  const [fillHeartIcon, setFillHeartIcon] = useState(false);

  const settingCarousel = {
    isRTL: false,
    itemsToShow: 4,
    itemsToScroll: 1,
    pagination: false,

    settingCarouselBreakpoints: [
      { width: 360, itemsToShow: 1, enableSwipe: true },
      { width: 430, itemsToShow: 2 },
      { width: 720, itemsToShow: 3 },
      { width: 1080, itemsToShow: 4, enableSwipe: false }
    ]
  }

  return (
    <S.Container>
      <h2>{categoryTitle}</h2>
      <Carousel
        isRTL={settingCarousel.isRTL}
        itemsToShow={settingCarousel.itemsToShow}
        pagination={settingCarousel.pagination}
        breakPoints={settingCarousel.settingCarouselBreakpoints}
      >
        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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

        <S.AlbumContent className='album-content' >
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
      </Carousel>
    </S.Container>
  )
}