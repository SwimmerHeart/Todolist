import React, {useState} from 'react';
import {Button} from "../style/ElementStyled";
import styled from "styled-components";
import AddTodosModal from "./AddTodosModal";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {useAppDispatch} from "../app/hooks";
import {setEditMode} from "../features/todos/todoSlice";

const EmptyBlock = styled.div`
  padding: 0 1rem;
  p {
    color: var(--main-purple);
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  Button {
    margin: 0 auto;
  }
`
type TEmptyProps = {
    editMode: boolean
}

const EmptyTodos:React.FC<TEmptyProps> = ({editMode}) => {
    const dispatch = useAppDispatch()

    return (
        <EmptyBlock>
            <p>В настоящее время проектов нет. Создайте новый проект</p>
            <Button onClick={()=>dispatch(setEditMode(true))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                <span>Добавить проект</span>
            </Button>
            {editMode && <AddTodosModal />}
        </EmptyBlock>
    );
};

export default EmptyTodos;