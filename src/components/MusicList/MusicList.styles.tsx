import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  h2 {
    width: 100%;
    margin: 2rem 2.6rem;
    color: var(--light-black);
  }
`;

export const AlbumContent = styled.div`
  background-color: var(--white-secondary);
  border: 2px solid var(--purple);
  border-radius: 0.25rem;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h3 {
    color: var(--light-black);
  }

  p, button {
    margin: 0.5rem;
  }

  p, span {
    font-weight: 500;
  }
`;

export const AlbumImg = styled.img`
  width: 200px;
  height: auto;
`;