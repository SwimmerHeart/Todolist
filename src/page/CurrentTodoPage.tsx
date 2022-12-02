import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import AddTodosModal from "../components/AddTodosModal";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {IconSvg} from "../style/ElementStyled";
import {useAppSelector} from "../app/hooks";
import {ITodoItem} from "../features/todos/todoSlice";

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
const TaskItem = styled.li`
  max-width: 300px;
  width: 100%;
  height: auto;
  min-height: 100px;
  border-radius: 0.5rem;
  background-color: var(--bg-menu);
  color: var(--color-textItem);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 43%);
  padding: 0.5rem;
  
  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--medium-grey);
    margin: 0.5rem 0;
    font-style: italic;
  }
`
const PriorityBlock = styled.div`
  background-color: blue;
  color: white;
  width: 80px;
  height: 20px;
  border-radius: 1rem;
  padding: 2px;
  text-align: center;
  line-height: 1;
`
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TaskPage: React.FC = () => {
    const status:string[] = ['queue', 'development', 'done']
    const [todo, setTodo] = useState<any>([])
    const {editMode, todos, currentTodo} = useSelector((state: RootState) => state.todos)
    // const statusTodo = useAppSelector((state:RootState) =>
    //         state.todos.tasks.find((task) => task.name === currentTodo.tasks)?.completed
    // );
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
                            {current.tasks.filter(task=>task.completed === item).map(task=><TaskItem key={task.id}>
                                <ItemHeader>
                                    <PriorityBlock>{task.priority}</PriorityBlock>
                                    <IconSvg  className={'task'} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                              preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/>
                                    </IconSvg>
                                </ItemHeader>
                                <h3>{task.title}</h3>
                                <p>XX подзадача из {task.subtask.length}</p>
                            </TaskItem>)}
                        </TasksList>
                    </TaskStatus>)}
            </TaskContent>
            {editMode && <AddTodosModal/>}
        </TaskBlock>
    );
};

export default TaskPage;