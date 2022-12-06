import React, {useEffect, useState} from 'react';
import {IconSvg} from "../style/ElementStyled";
import styled from "styled-components";
import {ITaskItem, removeTask, removeTodo} from "../features/todos/todoSlice";
import Timer from "./Timer";
import MenuModalTask from "./MenuModalTask";
import {useAppDispatch} from "../app/hooks";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";



const TaskItemBlock = styled.li`
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
    text-align: center;
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

const TaskItem:React.FC<ITaskItem> = (task) => {
    const {todos, currentTodo} = useSelector((state:RootState)=>state.todos)
    const {id, priority, title, startDate, endDate} = task
    const dispatch = useAppDispatch()
    const [activeMenu, setActiveMenu] = useState(false)

    const handlerRemoveTask = (id: string) => {
        dispatch(removeTask(id))
        setActiveMenu(false)
        console.log(todos,id)
        const t1 = todos.filter(todo=>todo.title === currentTodo)
            .find(todo=>todo.tasks.filter(task=>task.id !== id))
        console.log(todos)
        const t2 = todos.filter(todo=>todo.title === currentTodo)
            .find(todo=>todo.tasks.filter(task=>task.id !== id))
            // console.log(t2.tasks)
        //[{          todos[x].filter=>[1].find=>{?}.tasks=>[].
        // task:[]
        // }]
        // find(todo=>todo.tasks.filter(task=>task.id !== id))

    }

    useEffect(()=>{

    },[])
    // console.log(todos)

        // .map(todo=>todo.tasks.filter(task=>task.id === id))


    return (
        <TaskItemBlock key={id}>
            <ItemHeader>
                <PriorityBlock>{priority}</PriorityBlock>
                <IconSvg  className={'task'}
                          onClick={() => setActiveMenu(true)}
                          xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                          preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <circle cx="16" cy="8" r="2" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                    <circle cx="16" cy="24" r="2" fill="currentColor"/>
                </IconSvg>
                <MenuModalTask active={activeMenu} setActive={setActiveMenu}
                               handlerRemoveTask={handlerRemoveTask} id={id}/>
            </ItemHeader>
            <h3>{title}</h3>
            <Timer startDate={startDate} endDate={endDate}/>
            <p>XX подзадача из {task.subtask.length}</p>
        </TaskItemBlock>
    );
};

export default TaskItem;