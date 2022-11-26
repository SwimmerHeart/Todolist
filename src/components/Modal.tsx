import React from 'react';
import styled from "styled-components";

type TModalProps = {
    active: boolean
    setActive: any
    children: React.ReactNode
}
type TProps = {
    active:boolean
}
const ModalBlock = styled.div<TProps>`
  width: 100%;
  height: 100%;
  background-color: var(--dim);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.active ? '1' : '0'};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.5s;
`
const Content = styled.div<TProps>`
  padding: 1rem 1.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  width: 70%;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'};
  transition: 4s all;
`

const Modal: React.FC<TModalProps> = ({active, setActive, children}) => {
    return (
        <ModalBlock active={active}
            onClick={()=>setActive(false)}>
            <Content active={active}
                 onClick={e=>e.stopPropagation()}
            >
                {children}
            </Content>
        </ModalBlock>
    );
};

export default Modal;