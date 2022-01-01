import styled from 'styled-components';

export const ButtonStyles = styled.button`

  &.listen-button {
    background-color: var(--purple);
    padding: 0.5rem 2rem;
    color: var(--white);
    border-radius: 0.25rem;
    border: 1px solid var(--purple);
    font-size: 1rem;

    &:hover{
      filter: brightness(0.9);
      transition: 0.2s;
    }

    &:focus {
      box-shadow: 0px 0px 10px 0px var(--blue-light);
      background-color: var(--white);
      color: var(--purple);
    }
  }

  &.transparent-button {
    background: none;
    color: none;
    padding: 0;
    margin: 0;
    border: none;
  }
`;