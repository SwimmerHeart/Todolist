import React from 'react';
import styled from "styled-components";
import EmptyTodos from "./EmptyTodos";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import TodosPage from "../page/TodosPage";

const MainBlock = styled.main`
  background-color: var(--bg-grey);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  //position: relative;
  //overflow: auto;
  //margin-top: -1px;
`

interface ITodos {
    id: string
    num: number
    status: any
    description: string
    startDate: string
    endDate: string
    timeTodo: string
}

const Layout:React.FC = () => {
  const {todos, editMode} = useSelector((state:RootState)=>state.todos)
    return (
        <MainBlock>
            {todos.length === 0 ? <EmptyTodos editMode={editMode}/> : <TodosPage todos={todos} editMode={editMode}/>}
        </MainBlock>
    );
};

export default Layout;