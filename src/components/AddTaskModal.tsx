import React, {useState} from 'react';
import styled from "styled-components";
import {Button, ButtonModal, IconSvg} from "../style/ElementStyled";
import {useAppDispatch} from "../app/hooks";
import {addTask, ITaskItem, setCurrentTodo} from "../features/todos/todoSlice";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";


type TModalProps = {
    active: boolean
    setActive: any
}
type TProps = {
    active:boolean
}

const ModalBlock = styled.div<TProps>`
  width: 100%;
  height: 100%;
  background-color: var(--dim);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: ${props => props.active ? '1' : '0'};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.7s all;
`
const Content = styled.div<TProps>`
  padding: 1rem 1.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  width: 60%;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'};
  transition: 0.7s all;
  
  h2{
    width: 100%;
    color: var(--medium-grey)
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
    width: 100%;
    border: 1px solid var(--medium-grey);
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--medium-grey);
    :focus {
      outline: 2px solid var(--main-purple);
    }
    &.widthIcon{
      width: 97%;
    }
  }
  div{
    &.inputIcon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  select{
    padding: 0.5rem;
    border: 1px solid var(--medium-grey);
    border-radius: 5px;
    color:var(--medium-grey);
    :focus {
      outline: 2px solid var(--main-purple);
    }
  }
`

const AddTaskModal: React.FC<TModalProps> = ({active, setActive}) => {
    const {todos} = useSelector((state:RootState)=>state.todos)
    let numberTask:number = todos.length + 1
    let date = new Date()

    const [newTask, setNewTask] = useState<ITaskItem>({
        id:new Date().toISOString(),
        number: numberTask,
        title: '',
        description: '',
        priority: 'high',
        startDate: date,
        completed: 'queue',
        subtask:[{title:'', completed: false, id: new Date().toISOString()}]
    })
    const dispatch = useAppDispatch()

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }
    const setTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
          setNewTask({
              ...newTask, title: e.target.value
          })
    }
    const setPriority = (e:React.ChangeEvent<HTMLSelectElement>)=>{
          setNewTask({
              ...newTask, priority: e.target.value
          })
    }
    const setDescription = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setNewTask({
            ...newTask, description: e.target.value
        })
    }
    const setCompleted = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setNewTask({
            ...newTask, completed: e.target.value
        })
    }

    const addSubTask = () => {
        setNewTask(
            {...newTask,
                subtask:[...newTask.subtask,
                    {id:new Date().toISOString(),title:'', completed: false}]}
        )
    }
    const subList = [...newTask.subtask]
    const setSubTitle = (index:number,e:React.ChangeEvent<HTMLInputElement>) =>{
           subList[index].title = e.target.value
        setNewTask({
            ...newTask,
            subtask: subList,
        });
    }
    const removeSubTask = (id:string) =>{
        setNewTask({
            ...newTask, subtask: subList.filter(sub=>sub.id !== id)
        })
    }
    const addNewTask = () => {
        dispatch(addTask(newTask))
        setNewTask({
            id:new Date().toISOString(),
            number: numberTask,
            title: '',
            description: '',
            priority: '',
            startDate: date,
            completed: 'queue',
            subtask:[{title:'', completed: false, id: new Date().toISOString()}]
        })
        setActive(false)
    }

    return (
        <ModalBlock active={active}
                    onClick={()=>setActive(false)}>
            <Content active={active}
                     onClick={e=>e.stopPropagation()}
            >
                <h2>Добавить новую задачу</h2>
                    <Form  onSubmit={submitForm}>
                        <label htmlFor="todo_name">Название</label>
                        <input type="text"
                               id="todo_name"
                               name="todo_name"
                               placeholder="Введите название проекта"
                               value={newTask.title}
                               onChange={setTitle}
                        />
                        <label htmlFor="priority">Приоритет</label>
                        <select name="priority" id="priority"
                                onChange={setPriority}
                                value={newTask.priority}
                        >
                            <option value="high">Высокий</option>
                            <option value="medium">Средний</option>
                            <option value="low">Низкий</option>
                        </select>
                        <label htmlFor="todo_description">Описание</label>
                        <input type="textarea"
                               id="todo_description"
                               name="todo_description"
                               placeholder="Опишите что нужно сделать"
                               value={newTask.description}
                               onChange={setDescription}
                        />
                        <label htmlFor="subtask">Подзадача</label>
                        {newTask.subtask.map((sub,index)=>(
                            <div className={'inputIcon'} key={sub.id}>
                                <input className={'widthIcon'}
                                       type="text"
                                       id="subtask"
                                       name="subtask"
                                       value={sub.title}
                                       onChange={(e)=>setSubTitle(index, e)}
                                />
                                <IconSvg  className={'close'}
                                          onClick={() => removeSubTask(sub.id)}
                                          xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/>
                                </IconSvg>
                            </div>
                        ))}
                        <ButtonModal className={'purple'}
                                     onClick={addSubTask}
                        >+ Добавить подзадачу</ButtonModal>
                        <label htmlFor="completed">Статус</label>
                        <select name="completed" id="completed"
                                onChange={setCompleted}
                                value={newTask.completed}
                        >
                            <option value="queue">QUEUE</option>
                            <option value="development">DEVELOPMENT</option>
                            <option value="done">DONE</option>
                        </select>
                        <Button style={{marginTop:'3.8rem'}}
                                onClick={addNewTask}
                        >Создать Задачу</Button>
                    </Form>
            </Content>
        </ModalBlock>
    );

};

export default AddTaskModal;