import React from "react";
import {useRef, useState} from "react";
import styled from "styled-components";
import {setSearchValue} from "../features/todos/todoSlice";
import {useAppDispatch} from "../app/hooks";
import {CloseIcon, IconSvg} from "../style/ElementStyled";


const SearchBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  background-color: var(--bg-menu);
  color: var(--medium-grey);
  position: relative;
  border: 1px solid var(--color-elem);
  padding: 12px 20px 12px 42px;
  width: 200px;
  border-radius: 1.5rem;
  font-size: 1rem;
  outline: none;
  
  :focus{
    border: 1px solid var(--main-purple);
    width: 300px;
    transition: 0.7s;
  }
  :hover{
    width: 300px;
    transition: 0.7s;
  }
`
const Search:React.FC = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const onClickClear = () => {
        setValue('')
        inputRef.current?.focus()
    }
    const onChangeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <SearchBlock>
            <IconSvg xmlns="http://www.w3.org/2000/svg"  width="32" height="32"
                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
            </IconSvg>
            <Input placeholder={'Поиск проекта'}
                   ref={inputRef}
                   value={value}
                   onChange={onChangeValue}/>
            {value && <CloseIcon onClick={onClickClear} className={'close'} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/>
            </CloseIcon>}

        </SearchBlock>

    )
}
export default Search;