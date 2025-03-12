import React, { JSX } from 'react'
import TodoContext from './TodoContext';
import { Todo } from '../../Todo';




const INITIAL_STATE = {
    todoCount: 2,
    todos: [

    ],
    completed: 0,
    pendding: 2,
}





interface props {
  children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({children}: props) => {
  return (
    <TodoContext.Provider value={{}}>
        {children}
        </TodoContext.Provider>
  )
}
