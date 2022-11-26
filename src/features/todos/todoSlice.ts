import {createSlice, current} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface ITodoItem {
    id: string
    count: number
    title: string
    description: string
    startDate?: string
    endDate?: string
    timeTodo?: string
    status?: Status
}

export enum Status {
    QUEUE = 'queue',
    DEVELOPMENT = 'development',
    DONE = 'done'
}

interface ITodoState {
    todos: ITodoItem[]
    editMode: boolean
    editMenu: boolean
    currentTodo: ITodoItem | null
}

const initialState: ITodoState = {
    todos: [],
    editMode: false,
    editMenu: false,
    currentTodo: null
};


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id:new Date().toISOString(),
                title: action.payload.title,
                description: action.payload.description,
                count: state.todos.length + 1,
                status: Status.QUEUE
            })
        },
        removeTodo: (state, action) => {

        },
        setEditMode: (state, action) => {
            state.editMode = action.payload
        },
        setEditMenu: (state, action) => {
            state.editMode = action.payload
        },
        setCurrentPage: (state, action) => {
            // state.currentTodo = action.payload
            // state.currentTodo = state.todos.find(todo=>todo.count === action.payload)
            // console.log(action.payload)
            // console.log(current)
        },

    }
});

export const {addTodo, removeTodo, setEditMode,setEditMenu,setCurrentPage} = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos;
export default todoSlice.reducer;
