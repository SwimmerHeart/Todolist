import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import AddTodosModal from "../components/AddTodosModal";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {IconSvg} from "../style/ElementStyled";
import {useAppSelector} from "../app/hooks";
import {ITodoItem} from "../features/todos/todoSlice";
import TaskItem from "../components/TaskItem";

const TaskBlock = styled.div`
  display: flex;
  background-color: var(--bg-main);
  color: var(--color-textMenu);
  height: 100vh;
  width: 100%;
  max-width: 1300px;
`
const TaskContent = styled.main`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
`
const TaskStatus = styled.ul`
  color: var(--medium-grey);
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


const TaskPage: React.FC = () => {
    const status:string[] = ['queue', 'development', 'done']
    const [todo, setTodo] = useState<any>([])
    const {editMode, todos, currentTodo} = useSelector((state: RootState) => state.todos)

   useEffect(()=>{
       setTodo(todos.find((todo) => todo.title === currentTodo))
   },[currentTodo])

    const current = todos.find((todo) => todo.title === currentTodo)

    return (
        <TaskBlock>
            <TaskContent>
                {current && status.map(item=><TaskStatus key={item}>
                        <h2>{item} ({current.tasks.length})</h2>
                       <TasksList>
                            {current.tasks.filter(task=>task.completed === item)
                                .map((task)=><TaskItem key={task.id} {...task}/>
                           )}
                        </TasksList>
                    </TaskStatus>)}
            </TaskContent>
            {editMode && <AddTodosModal/>}
        </TaskBlock>
    );
};

export default TaskPage;