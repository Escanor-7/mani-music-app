import styled from 'styled-components';

export const IconStyles = styled.img`

  &.user-icon {
    width: 40px;

    @media(max-width: 720px){
      width: 32px;
    }
  }

  &.album-cover-img {
    width: 200px;
    height: auto; 
  }

  &.header-logo {
    width: 150px;
    height: 150px;

    @media(max-width: 1080px){
      width: 120px;
      height: 120px;
    }

    @media(max-width: 720px){
      width: 90px;
      height: 90px;
    }
  }

  &.heart-icon {
    width: 2rem;
    height: 2rem;
  }

  &.scroll-up {
    width: 4rem;
    height: 4rem;

    @media(max-width: 720px){
      width: 3rem;
      height: 3rem;
    }
  }
`;