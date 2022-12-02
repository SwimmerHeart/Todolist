import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: var(--bg-btn);
  color: var(--white);
  border-radius: 1.5rem;
  padding: 0.5rem 1.125rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--bg-btn-hover);
    transition: 0.7s;
    cursor: pointer;
  }

  svg {
    font-size: inherit;
    padding-right: 5px;
  }
`;

export const ButtonModal = styled.button`
  border: none;
  background-color: var(--white);
  color: var(--medium-grey);
  border-radius: 1.5rem;
  padding: 0.5rem 1.125rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &.red {
    color: var(--red);

    :hover {
      color: var(--red-hover);
    }
  }
  &.purple{
    color: var(--main-50purple);
    background-color: var(--light-purple);
    :hover{
      background-color: var(--main-50purple);
      color: var(--white-hover);
    }
  }

  &:hover {
    background-color: var(--white-hover);
    color: var(--medium-grey);
  }

  svg {
    font-size: inherit;
    padding-right: 5px;
  }
`;
export const IconSvg = styled.svg`
  color: var(--medium-grey);
  width: 2rem;
  height: 2rem;

  &.close {
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
  &.moon{
    width: 1.5rem;
    height: 1.5rem;
  }
  &.task{
    width: 1rem;
    height: 1rem;
  }
`
export const CloseIcon = styled.svg`
  position: absolute;
  right: 2px;
  color: var(--medium-grey);

  &:hover {
    cursor: pointer;
  }
`
export const InputIconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
