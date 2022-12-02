import React from 'react';
import styled from "styled-components";
import {ITodoItem} from "../features/todos/todoSlice";
import {Link} from "react-router-dom";



export const Item = styled.li`
  max-width: 250px;
  width: 100%;
  height: 120px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--bg-menu);
  color: var(--color-textItem);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 13%);

  h2 {
    color: var(--color-textItem);
    margin: 0.5rem 0;
    font-weight: 700;

    :hover {
      color: var(--main-purple)
    }
  }

  p {
    margin: 0.5rem 0;
    font-style: italic;
    color: var(--color-textMain);
  }
`

const TodosItem: React.FC<ITodoItem> = ({title, id, description,number}) => {

    return (
        <Item>
            <Link to={`/todo/${number}`} style={{}}>
                <h2>{title}</h2>
                <p>1 задача из 3</p>
            </Link>
        </Item>
    );
};

export default TodosItem;