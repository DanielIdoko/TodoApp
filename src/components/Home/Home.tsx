import React, { useContext, useEffect } from 'react'
import '../../index.css'
import Todos from './Todos'
import { TodoProvider }from '../../contexts/TodosContext' 
import { BiTask } from 'react-icons/bi'
import InputBar from './InputBar'


const Home: React.FC = () =>{
  return (
      <TodoProvider>
        <div className='w-full h-auto p-0 bg-gradient-to-br from-purple-900 to-blue-800'>
          <h1 className='text-left lg:text-center p-5 text-xl lg:text-xl font-sans text-gray-100 font-bold flex items-center'>
            <BiTask className='mr-1'/> Savify</h1>
            <p className=' text-left pt-0 pb-0 pl-5 font-sans text-white text-md md:text-xl'>Add, manage and update tasks</p>
          <InputBar />
          <h2 className="text-xl md:text-2xl mt-0 text-white font-bold pt-3 pb-0 pl-5">Tasks</h2>

          {/* Todos data  */}
          <Todos/>
       </div>
      </TodoProvider>
  )
}


export default Home