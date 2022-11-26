import React from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import TaskPage from "./page/TaskPage";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route path={'/task'} element={<TaskPage/>}/>
            </Routes>
        </>
    );
}

export default App;
