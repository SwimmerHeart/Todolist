import React, {useEffect} from 'react';
import styled from "styled-components";
import {useAppDispatch} from "../app/hooks";
import {ITodoItem, setCurrentTodo, setEditMode} from "../features/todos/todoSlice";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import SwitchTheme from "./SwitchTheme";


const NavBlock = styled.aside`
  width: 250px;
  flex: 0 0 auto;
  background-color: var(--bg-menu);
  color: var(--medium-grey);
  margin-left: -10px;
  position: relative;
  
  h2 {
    margin-bottom: 1rem;
    padding: 2rem 0 0 1.5rem;
    font-weight: 500;
  }
`
const NavList = styled.ul`
  max-height: 300px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-menu);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--main-purple);
    border-radius: 6px;
  }
  a {
    color: var(--medium-grey);
  }
`
const NavItem = styled.li`
  margin-bottom: 10px;
 
  a {
    display: flex;
    align-items: center;
    padding: 12px 0 12px 24px;
    cursor: pointer;

    :hover {
      background-color: var(--light-purple);
      color: var(--main-purple);
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }
  }

  a.active {
    color: var(--white);
    background-color: var(--main-purple);
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }

  svg {
    margin-right: 5px;
  }

  span {
    font-weight: 700;
  }
`
const Button = styled.button`
  color: var(--main-purple);
  padding: 12px 0 12px 24px;
  display: flex;
  align-items: center;
  background-color: var(--bg-menu);
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
  }
`
const NavTodos: React.FC = () => {

    const {todos} = useSelector((state: RootState) => state.todos)
    const dispatch = useAppDispatch()

    const onClickListItem = (title: string) => {
        dispatch(setCurrentTodo(title))
    }
    useEffect(() => {

    }, [todos.length])

    return (
        <NavBlock>
            <div>
                <h2>Все проекты ( {todos.length} )</h2>
            </div>
            <NavList>
                {todos.length > 0 && todos.map(todo => (
                    <NavItem key={todo.id}
                             onClick={() => onClickListItem(todo.title)}
                    >
                        <NavLink to={`/todo/${todo.number}`}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="16" height="16" preserveAspectRatio="xMidYMid meet"
                                 viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z"/>
                            </svg>
                            <span>{todo.title}</span>
                        </NavLink>
                    </NavItem>
                ))}
            </NavList>
            <Button onClick={() => dispatch(setEditMode(true))}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" preserveAspectRatio="xMidYMid meet"
                     viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z"/>
                </svg>
                <span>Создать новый проект</span>
            </Button>
           <SwitchTheme/>
        </NavBlock>
);
};

export default NavTodos;