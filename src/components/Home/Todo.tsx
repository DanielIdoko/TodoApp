import React from 'react'
import { BiTrash } from 'react-icons/bi'






type todo = {
  id: number,
  title: string,
  checkedTodo: boolean
}


function Todo({title, checked}) {
  return (
    <div className='w-full lg:w-140 h-12 bg-white/20 backdrop-blur-sm p-2 rounded-[16px] flex items-center mb-4'>
      <li className='text-purple-950 flex-1 text-md list-none'>
        {title}
      </li>

      <input 
      type="checkbox" 
      name="checkbox"
      checked={checked}
      className='mr-5 cursor-pointer'
      />
      <button className='w-10 flex justify-center items-center h-10 text-md text-white bg-red-800 rounded-lg cursor-pointer'>
        <BiTrash className='text-md'/>
      </button>
    </div>
  )
}

export default Todo