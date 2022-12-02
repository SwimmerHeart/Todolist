import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import TaskPage from "./page/TaskPage";
import TodosPage from "./page/TodosPage";
import Layout from "./components/Layout";
import CurrentTodoPage from "./page/CurrentTodoPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<TodosPage/>}/>
                    <Route path={'todo'} element={<TaskPage/>}/>
                    <Route path={'todo/:name'} element={<CurrentTodoPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
