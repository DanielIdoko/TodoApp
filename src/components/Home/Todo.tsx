import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { useTodos } from '../../contexts/TodosContext';




// Types
 type Todo = {
  id: number,
  title: string,
  completed: boolean
}

interface TodoItemProps  {
  todo: Todo
} 


const Todo: React.FC<TodoItemProps> = ({todo}) => {

  const { deleteTodos, toggleTodos} = useTodos();

  return (
    <div className='w-full lg:w-full h-18 bg-white/20 backdrop-blur-sm p-2 rounded-[16px] flex items-center mb-4'>
      <li className={`text-purple-950 flex-1 text-md list-none cursor-pointer ${todo.completed ? 'line-through text-gray-600' : ''}`}
      onClick={() => toggleTodos(todo.id)}>
        {todo.title}
      </li>

      <input 
        type="checkbox" 
        name="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodos(todo.id)}
        className='mr-5 cursor-pointer'
      />
      <button className='w-10 flex justify-center items-center h-10 text-md text-white bg-red-800 rounded-lg cursor-pointer'
      onClick={() => deleteTodos(todo.id)}>
        <BiTrash className='text-md'/>
      </button>
    </div>
  )
}

export default Todo