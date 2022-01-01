import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--white-ice);

    a {
      border: none;
      font-size: 1rem;
      background: none;
      text-decoration: none;
      color: var(--light-black);
      font-weight: 600;

      @media(max-width: 720px){
        display: none;
      }
    }
`;

export const Search = styled.div`
  width: 50%;

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    outline: none;
    border-radius: 0.25rem;
    background-color: var(--white-secondary);
    border: 1px solid var(--purple);
    font-weight: 500;
    color: var(--light-black);
    font-size: 1rem;
    text-overflow: ellipsis;

    &:hover, :focus {
      box-shadow: 0px 0px 10px var(--navy-blue);
    }
  
    @media(max-width: 720px){
      font-size: 0.8rem;
    }
  }
`;