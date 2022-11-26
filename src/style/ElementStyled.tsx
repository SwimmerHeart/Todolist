import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: var(--main-purple);
  color: var(--white);
  border-radius: 1.5rem;
  padding: 0.5rem 1.125rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--main-50purple);
    cursor: pointer;
    
  }
  svg{
    font-size: inherit;
    padding-right: 5px;
  }
`;