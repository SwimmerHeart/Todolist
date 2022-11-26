import React, {useEffect} from 'react';
import styled from "styled-components";
import {useAppDispatch} from "../app/hooks";
import {ITodoItem, setCurrentPage, setEditMode} from "../features/todos/todoSlice";



const NavBlock = styled.aside`
  width: 300px;
  flex: 0 0 auto;
  background-color: var(--white);
  color: var(--medium-grey);
  h2{
    margin-bottom: 1rem;
    padding: 2rem 0 0 1.5rem;
    font-weight: 500;
  }
`
const NavList = styled.ul`
  
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0 12px 24px;
  cursor: pointer;
  :hover{
    background-color: var(--light-purple);
    color: var(--main-purple)
  }
  svg{
    margin-right: 5px;
  }
  span{
    font-weight: 700;
  }
`
const Button = styled.button`
  color: var(--main-purple);
  padding: 12px 0 12px 24px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  cursor: pointer;
  svg{
    margin-right: 5px;
  }
  span{
    font-size: 1rem;
    font-weight: 700;
  }
`

type TNavTodosProps = {
    todos: ITodoItem[]
}

const NavTodos:React.FC<TNavTodosProps> = ({todos}) => {
    const dispatch = useAppDispatch()

    const onClickListItem = (item:number) => {
        const current = todos.find(todo=>todo.count === item)
        dispatch(setCurrentPage(item))

    }
    useEffect(()=>{


    },[todos.length])

    return (
        <NavBlock>
            <div>
                <h2>Все проекты ( {todos.length} )</h2>
            </div>
            <NavList>
                {todos.length > 0 && todos.map(todo=>(
                    <NavItem key={todo.id}
                             onClick={()=>onClickListItem(todo.count)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="16" height="16" preserveAspectRatio="xMidYMid meet"
                             viewBox="0 0 24 24"><path fill="currentColor"
                                                       d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z"/></svg>
                        <span>{todo.title}</span>
                    </NavItem>
                ))}
            </NavList>
            <Button onClick={()=>dispatch(setEditMode(true))}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" preserveAspectRatio="xMidYMid meet"
                     viewBox="0 0 24 24"><path fill="currentColor"
                                               d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z"/></svg>
                <span>Создать новый проект</span>
            </Button>
        </NavBlock>
    );
};

export default NavTodos;