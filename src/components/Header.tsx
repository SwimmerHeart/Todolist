import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "../style/ElementStyled";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {useAppDispatch} from "../app/hooks";
import {removeTodo, setCurrentTodo} from "../features/todos/todoSlice";
import {Link} from "react-router-dom";
import MenuModal from "./MenuModal";
import Search from "./Search";
import AddTaskModal from "./AddTaskModal";


const HeaderBlock = styled.header`
  width: 100%;
  max-width: 1600px;
  height: 70px;
  background-color: var(--bg-menu);
`
const Container = styled.div`
  max-width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  

  a {
    color: var(--color-textMenu);
  }

  h2 {
    width: 20%;
    max-width: 300px;
  }
`
const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  color: var(--color-textMenu);
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  Button {
    margin-right: 5px;
  }

`
const ButtonMenu = styled.button`
  background-color: var(--bg-menu);

  svg {
    display: block;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: var(--color-textMenu);
  }
`


const Header: React.FC = () => {

    let {todos, currentTodo} = useSelector((state: RootState) => state.todos)
    const dispatch = useAppDispatch()
    const [active, setActive] = useState(false)
    const [activeAddTask, setActiveAddTask] = useState(false)

    const handlerRemoveTodo = (id: string) => {
        dispatch(removeTodo(id))
        setActive(false)
    }
    const setFirstCurrentTodo = () => {
        if (todos.length === 1) {
            dispatch(setCurrentTodo(todos[0].title))
        }
    }

    useEffect(() => {
        setFirstCurrentTodo()
    }, [todos.length]);

    return (
        <HeaderBlock>
            <Container>
                <Link to={'/'}>
                    <h1>Todolist</h1>
                </Link>
                <SearchBlock>
                    <h2>{currentTodo}</h2>
                    <Search />
                </SearchBlock>

                <ButtonGroup>
                    <Button onClick={() => setActiveAddTask(true)}
                            style={{
                                opacity: todos.length === 0 ? '0.5' : '1',
                                cursor: todos.length === 0 ? 'not-allowed' : 'pointer'
                            }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
                        </svg>
                        <span>Добавить задачу</span>
                    </Button>
                    <AddTaskModal active={activeAddTask} setActive={setActiveAddTask}/>
                    <ButtonMenu onClick={() => setActive(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <circle cx="16" cy="8" r="2" fill="currentColor"/>
                            <circle cx="16" cy="16" r="2" fill="currentColor"/>
                            <circle cx="16" cy="24" r="2" fill="currentColor"/>
                        </svg>
                    </ButtonMenu>
                    {currentTodo &&
                        <MenuModal active={active} setActive={setActive} handlerRemoveTodo={handlerRemoveTodo}
                                   currentTodo={currentTodo}/>}
                </ButtonGroup>
            </Container>
        </HeaderBlock>
    );
};

export default Header;