import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {IconSvg} from "../style/ElementStyled";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {useAppDispatch} from "../app/hooks";
import {toggleTheme} from "../features/todos/todoSlice";

type TProps = {
    theme: boolean
}

const SwitchBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-grey);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding: 4px 20px;
  margin-left: -10px;
  position: fixed;
  left: 0;
  bottom: 40px;
 
`
const ToggleBlock = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background: linear-gradient(to right,
  hsl(236, 72%, 79%),
  hsl(237, 63%, 64%));
  cursor: pointer;
  transition: 0.4s;
  border-radius: 24px;
`
const Slider = styled.span<TProps>`
  position: absolute;
  height: 20px;
  width: 20px;
  left: ${props => props.theme === 'light' ? "2px" : "28px"}; 
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
`
const SwitchTheme:React.FC = () => {
    const theme = useSelector((state:RootState)=>state.todos.theme)
    const dispatch = useAppDispatch()
    const handlerTheme = () =>{
        dispatch(toggleTheme(theme ==='light' ? 'dark' : 'light'))

    }

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    },[theme])
    return (
        <SwitchBlock >
            <label htmlFor="theme">
                <IconSvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                    <path fill="currentColor"
                          d="M196 128a68 68 0 1 1-68-68a68.1 68.1 0 0 1 68 68Zm-68-84a8 8 0 0 0 8-8v-8a8 8 0 0 0-16 0v8a8 8 0 0 0 8 8ZM57.3 68.6a8.1 8.1 0 0 0 11.3 0a8 8 0 0 0 0-11.3l-5.7-5.7a8 8 0 0 0-11.3 11.3ZM36 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16Zm21.3 67.4l-5.7 5.7a8 8 0 0 0 0 11.3a8.3 8.3 0 0 0 5.7 2.3a8 8 0 0 0 5.6-2.3l5.7-5.7a8 8 0 0 0-11.3-11.3ZM128 212a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8Zm70.7-24.6a8 8 0 0 0-11.3 11.3l5.7 5.7a8 8 0 0 0 5.6 2.3a8.3 8.3 0 0 0 5.7-2.3a8 8 0 0 0 0-11.3ZM228 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16Zm-34.9-49.1a7.8 7.8 0 0 0 5.6-2.3l5.7-5.7a8 8 0 1 0-11.3-11.3l-5.7 5.7a8 8 0 0 0 0 11.3a7.8 7.8 0 0 0 5.7 2.3Z"/>
                </IconSvg>
            </label>
            <ToggleBlock onClick={handlerTheme}>
                <Slider theme={theme}></Slider>
            </ToggleBlock>
            <label htmlFor="theme">
                <IconSvg className={'moon'} xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"/>
                </IconSvg>
            </label>
        </SwitchBlock>
    );
};

export default SwitchTheme;