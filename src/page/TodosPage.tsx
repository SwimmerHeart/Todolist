import React, {useEffect} from 'react';
import styled from "styled-components";
import TodosItem from "../components/TodosItem";
import AddTodosModal from "../components/AddTodosModal";
import {ITodoItem, searchTodoTitle} from "../features/todos/todoSlice";
import {useAppDispatch} from "../app/hooks";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import EmptyTodos from "../components/EmptyTodos";



const TodosBlock = styled.ul`
  background-color: var(--bg-main);
  min-height: 100vh;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  gap: 1rem;
  position: relative;
  padding: 2rem;
`
type TTodosPageProps = {
    todos: ITodoItem[]
    currentTodo: ITodoItem | null
    filteredTodos: ITodoItem[]
    searchValue: string
    editMode: boolean
}

const TodosPage:React.FC = () => {
    const {todos, editMode,filteredTodos,searchValue, currentTodo} = useSelector((state:RootState)=>state.todos)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(searchTodoCount(searchValue))
       dispatch(searchTodoTitle(searchValue))
    }, [searchValue,currentTodo])

    if(todos.length === 0){
        return <EmptyTodos editMode={editMode}/>
    }

    return (
        <TodosBlock>
            {todos.length>0 && filteredTodos.map(todo=><TodosItem key={todo.number} {...todo}/>)}
            {editMode && <AddTodosModal />}
        </TodosBlock>
    );
};

export default TodosPage;