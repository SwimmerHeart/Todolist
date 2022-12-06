import React from 'react';
import styled from "styled-components";
import {ButtonModal} from "../style/ElementStyled";
import {ITodoItem} from "../features/todos/todoSlice";

type TModalProps = {
    active: boolean
    setActive: any
    id: string
    handlerRemoveTask: (id:string)=>void
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
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2rem 1rem 0 0 ;
  z-index: 10;
  opacity: ${props => props.active ? '1' : '0'};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.5s;
`
const Content = styled.div<TProps>`
  padding: 1rem 1.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  width: 20%;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'};
  transition: .5s all;
`
const Menu = styled.div`
  
`

const MenuModal: React.FC<TModalProps> = ({active, setActive, handlerRemoveTask,id}) => {

    return (
        <ModalBlock active={active}
                    onClick={()=>setActive(false)}>
            <Content active={active}
                     onClick={e=>e.stopPropagation()}
            >
               <Menu>
                   <ButtonModal className={'modal'}>Редактировать Задачу</ButtonModal>
                   <ButtonModal className={'modal red'}
                                onClick={()=>handlerRemoveTask(id)}
                   >Удалить задачу{id}</ButtonModal>
               </Menu>
            </Content>
        </ModalBlock>
    );
};

export default MenuModal;