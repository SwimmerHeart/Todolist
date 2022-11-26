import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../style/ElementStyled";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {useAppDispatch} from "../app/hooks";
import {setEditMode} from "../features/todos/todoSlice";
import {Link} from "react-router-dom";
import MenuModal from "./MenuModal";



const HeaderBlock = styled.header`
  width: 100vw;
  height: 70px;
  background-color: var(--white);
`
const Container = styled.div`
  width: 90%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  a{
    color: black;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  Button{
    margin-right: 5px;
  }
  
`
const ButtonMenu = styled.button`
  background-color: var(--white);
  svg{
    display: block;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`

const Header: React.FC = () => {
    const {todos} = useSelector((state:RootState)=>state.todos)
    const dispatch = useAppDispatch()
    const [active, setActive] = useState(false)

    return (
        <HeaderBlock>
            <Container>
                <Link to={'/'}>
                    <h1>Todolist</h1>
                </Link>
                <h2>dd</h2>
                <div>поиск</div>
                <ButtonGroup>
                    <Button onClick={()=>dispatch(setEditMode(true))}
                            style={{opacity: todos.length === 0 ? '0.5' : '1',
                                cursor: todos.length === 0 ? 'not-allowed': 'pointer'}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                        <span>Добавить задачу</span>
                    </Button>
                    <ButtonMenu onClick={()=>setActive(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32"
                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <circle cx="16" cy="8" r="2" fill="currentColor"/>
                            <circle cx="16" cy="16" r="2" fill="currentColor"/>
                            <circle cx="16" cy="24" r="2" fill="currentColor"/></svg>
                    </ButtonMenu>
                    <MenuModal active={active} setActive={setActive} />


                    {/*{active && <MenuModal />}*/}
                </ButtonGroup>
            </Container>
        </HeaderBlock>
    );
};

export default Header;