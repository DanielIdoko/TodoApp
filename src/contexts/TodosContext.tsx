import React, { createContext, useContext, useEffect, useReducer } from 'react'
import handleTodoReducer from '../Reducers/TodoReducer'



type Todo = {
  id: number,
  title: string,
  completed: boolean
}


interface TodoContextTypes {
    todos: Todo[],
    addTodo: (title: string) => void
    deleteTodos: (id: number) => void
    toggleTodos: (id: number) => void
}


const TodoContext = createContext<TodoContextTypes | null>(null);


const TodoProvider: React.FC<{ children: React.ReactNode }> = ({children}) =>{
    const [todos, dispatch] = useReducer(handleTodoReducer, [], () =>{
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // Dispatchers for todos
    const addTodo = (title: string) =>{
        dispatch({type: 'ADD_TODO', payload: title});
    }

    const toggleTodos = (id: number) =>{
        dispatch({type: 'TOGGLE_TODO', payload: id});
    }

    const deleteTodos = (id: number) =>{
        dispatch({type: 'DELETE_TODO', payload: id})
    }

    const contextValues: TodoContextTypes = {addTodo, todos, deleteTodos, toggleTodos}

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    const context = useContext(TodoContext);
    if(!context){
        throw new Error("Error, useTodos must be inside the provider")
    }
    return context
}

export { TodoContext, TodoProvider }