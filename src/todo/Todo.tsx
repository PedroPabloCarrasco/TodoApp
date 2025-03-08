import { TodoProvider } from "./components/context/TodoProvider"


export const Todo = () => {
  return (
    <TodoProvider>
    <h1>Todo:</h1>
    <li>Todo 1</li>
    <li>Todo 2</li>
    <li>Todo 3</li>
    <ul>
        
        
    </ul>

    </TodoProvider>
  )
}
