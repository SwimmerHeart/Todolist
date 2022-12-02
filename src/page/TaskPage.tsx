import React from 'react';
import styled from "styled-components";
import NavTodos from "../components/NavTodos";
import AddTodosModal from "../components/AddTodosModal";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";

const TaskBlock = styled.div`
  background-color: var(--bg-main);
  height: 100vh;
  width: 100%;
  max-width: 1300px;
  display: flex;
  gap: 1rem;
`
const TaskContent = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  gap: 1rem;
  padding: 2rem;
`
const TaskStatus = styled.ul`
  max-width: 300px;
  min-width: 200px;
  width: 33%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
const TasksList = styled.ul`
  display: block;
  width: 100%;
`
const TaskItem = styled.li`
  max-width: 300px;
  width: 100%;
  height: auto;
  min-height: 100px;
  border-radius: 0.5rem;
  background-color: var(--white);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 13%);
  
  h3 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
    font-style: italic;
  }

`

const TaskPage: React.FC = () => {
    const status:string[] = ['Queue', 'Development', 'Done']
    const {editMode, todos} = useSelector((state: RootState) => state.todos)

    return (
        <TaskBlock>
            <TaskContent>
                {status.map(item=>(
                    <TaskStatus key={item}>
                        <h2>{item} (2)</h2>
                        <TasksList>
                            <TaskItem>
                                <h3>Задача</h3>
                                <p>1 подзадача из 3</p>
                            </TaskItem>
                            <TaskItem>
                                <h3>Задача</h3>
                                <p>1 подзадача из 3</p>
                            </TaskItem>
                        </TasksList>
                    </TaskStatus>
                ))}
            </TaskContent>
            {editMode && <AddTodosModal/>}
        </TaskBlock>
    );
};
export default TaskPage;