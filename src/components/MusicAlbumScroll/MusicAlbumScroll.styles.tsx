import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    color: var(--light-black);
    text-align: center;
    margin: 2rem 0;
  }

  /* Customizing the arrows */
  div.rec-carousel {
    button.rec-arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      border: 1px solid var(--purple);
      color: var(--purple);
      min-width: fit-content;

      &:first-child {
        margin-left: 1rem;
      }

      &:last-child {
        margin-right: 1rem;
      }

      &:hover {
        background-color: var(--purple);
        color: var(--white-ice);
      }

      &:focus {
        background-color: var(--purple);
        color: var(--white-ice);
      }
    }
  }
`;

export const AlbumContent = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items: center;
  background-color: var(--white-secondary);
  border: 2px solid var(--purple);
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 2rem;

  h3 {
    width: 100%;
    color: var(--light-black);
    text-overflow: ellipsis;
    text-align: center;
  }

  h3, p, button {
    margin: 0.2rem;
  }

  p, span {
    font-weight: 500;
  }
`;

export const AlbumImg = styled.img`
  width: 200px; 

  @media(max-width: 1024px){
    width: 180px;
  }

  @media(max-width: 800px){
    width: 150px;
  }

  @media(max-width: 400px){
    width: 120px;
  }
`;