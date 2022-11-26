import React from 'react';
import styled from "styled-components";
import TodosItem from "../components/TodosItem";
import AddTodosModal from "../components/AddTodosModal";
import {ITodoItem} from "../features/todos/todoSlice";



const TodosBlock = styled.ul`
  background-color: var(--bg-grey);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  overflow: auto;
  padding: 2rem;
`
type TTodosPageProps = {
    todos: ITodoItem[]
    editMode: boolean
}

const TodosPage:React.FC<TTodosPageProps> = ({todos, editMode}) => {

    return (
        <TodosBlock>
            {todos.map(todo=><TodosItem key={todo.count} {...todo}/>)}
            {editMode && <AddTodosModal />}
        </TodosBlock>
    );
};

export default TodosPage;