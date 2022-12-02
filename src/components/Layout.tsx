import React from 'react';
import Header from "./Header";
import NavTodos from "./NavTodos";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const TodosContainer = styled.div`
  display: flex;
  padding: 10px;
  max-width: 1600px;
  //height: 100vh;
  background-color: var(--bg-menu);
`

const Layout: React.FC = () => {
    return (
        <>
            <Header/>
            <TodosContainer>
                <NavTodos/>
                <Outlet/>
            </TodosContainer>
        </>
    );
};

export default Layout;