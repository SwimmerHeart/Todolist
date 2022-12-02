import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface ITodoItem {
    id: string
    number: number
    title: string
    description: string
    tasks:ITaskItem[]
}
export interface ITaskItem{
    id: string
    number: number
    title: string
    description: string
    startDate?: Date
    endDate?: Date
    distance?: string
    priority?: string
    files?: string
    completed: string
    subtask:ISubTask[]
}
export interface ISubTask{
    id: string
    title: string
    completed: boolean
}


export enum Status {
    QUEUE = 'queue',
    DEVELOPMENT = 'development',
    DONE = 'done'
}

interface ITodoState {
    todos: ITodoItem[]
    filteredTodos: ITodoItem[]
    searchValue:string
    editMode: boolean
    editMenu: boolean
    currentTodo: string
    // currentTodo: ITodoItem | null
    theme: string
}

const initialState: ITodoState = {
    todos: [],
    filteredTodos: [],
    searchValue: '',
    editMode: false,
    editMenu: false,
    currentTodo: '',
    theme: 'light'
};


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo=>todo.title !== action.payload)
                state.currentTodo = ''
        },
        setEditMode: (state, action) => {
            state.editMode = action.payload
        },
        setCurrentTodo: (state, action) => {
            if(state.todos.length === 0){
                state.currentTodo = state.todos[0].title
            }
            state.currentTodo = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        searchTodoTitle: (state, action) => {
            state.filteredTodos = state.todos.filter(
                todo => todo.title.toLowerCase().includes(action.payload.toLowerCase()))
        },
        searchTodoCount: (state, action) => {
            state.filteredTodos = state.todos.filter(
                todo => todo.number == action.payload)
        },
        addTask: (state, action) => {
            state.todos.filter(todo=>todo.title === state.currentTodo)
                .find(todo=>todo.tasks.push(action.payload))

            // .find(todo=>todo.tasks.push(action.payload))
            // if(state.currentTodo){
            //     state.currentTodo.tasks.push(action.payload)
            // }
            // state[0].boards
            //     .find((board) => board.name === state[1])
            //     .columns.find((col) => col.name === action.payload.status)
            //     .tasks.push(action.payload);
        },
    }
});

export const {toggleTheme, addTodo, removeTodo, setEditMode,
    setCurrentTodo,searchTodoTitle,setSearchValue, searchTodoCount, addTask } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos;
export default todoSlice.reducer;
