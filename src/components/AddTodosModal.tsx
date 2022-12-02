import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../style/ElementStyled";
import {useAppDispatch} from "../app/hooks";
import {addTodo, ITodoItem, setEditMode} from "../features/todos/todoSlice";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";


const ModalBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--dim);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`
const AddTodoBlock = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem 1rem;
  z-index: 100;
  background-color: var(--white);
  color: var(--medium-grey);

  h2 {
    margin-bottom: 1rem;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 0.5rem 0;
    color: var(--medium-grey);
  }

  input, textarea {
    width: 92%;
    border: 1px solid var(--medium-grey);
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--medium-grey);

    :focus {
      outline: 2px solid var(--main-purple);
    }
  }
`
type TAddTodosModalProps = {
    editMode: boolean
    setActive: any
}


const AddTodosModal: React.FC = () => {

    const dispatch = useAppDispatch()
    const {todos} = useSelector((state: RootState) => state.todos)
    const [newTodo, setNewTodo] = useState<ITodoItem>({
        id: new Date().toISOString(),
        number: todos.length+1,
        title: '',
        description: '',
        tasks: []
    })

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(setEditMode(false))
        dispatch(addTodo(newTodo))
        setNewTodo({
            id: new Date().toISOString(),
            number: todos.length,
            title: '',
            description: '',
            tasks: []
        })
    }
    const setTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({
            ...newTodo, title: e.target.value
        })
    }
    const setDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({
            ...newTodo, description: e.target.value
        })
    }


    return (
        <ModalBlock onClick={() => dispatch(setEditMode(false))}>
            <AddTodoBlock onClick={e => e.stopPropagation()}>
                <h2>Добавить новый проект</h2>
                <div className="container">
                    <Form onSubmit={submitForm}>
                        <label htmlFor="todo_name">Название</label>
                        <input type="text"
                               id="todo_name"
                               name="todo_name"
                               placeholder="Введите название проекта"
                               value={newTodo.title}
                               onChange={setTitle}
                        />
                        <label htmlFor="todo_description">Описание</label>
                        <input type="textarea"
                               id="todo_description"
                               name="todo_description"
                               placeholder="Опишите что нужно сделать"
                               value={newTodo.description}
                               onChange={setDescription}
                        />
                        <Button type="submit">Создать проект</Button>
                    </Form>
                </div>
            </AddTodoBlock>
        </ModalBlock>
    );
};

export default AddTodosModal;