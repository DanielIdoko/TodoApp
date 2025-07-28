import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useTodos } from '../../contexts/TodosContext'



const InputBar: React.FC = () =>{
  const [todoTitle, setTodoTitle] = useState('')
  const { addTodo } = useTodos();


  // handle function to add todo on form submit
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todoTitle.trim()){
      addTodo(todoTitle.trim())
      setTodoTitle('')
    }
  }

  return (
    <form 
      className='w-full p-4 flex items-center bg-transparent mt-3 gap-3'
      onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="text"
        placeholder='Enter a todo here...' 
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        className='border-1 border-purple-700 bg-white/10 text-gray-200 text-md p-2 w-full h-11 lg:w-full rounded-md focus-within:outline-0' />

      <button 
       type='submit'
       className='w-11 h-11 bg-primary flex items-center justify-center rounded-md cursor-pointer add-todo-btn '
       ><BiPlus className=' text-xl font-bold text-white'/></button>
    </form>
  )
}

export default InputBar