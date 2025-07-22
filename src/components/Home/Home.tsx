import React from 'react'
import '../../index.css'
import Todos from './Todos'
import { BiTask } from 'react-icons/bi'

function Home() {
  return (
    <div className='w-full h-dvh p-0 bg-gradient-to-br from-purple-700 to-blue-800'>
      <h1 className='text-left lg:text-center p-5 text-xl lg:text-xl font-sans text-gray-100 font-bold flex items-center'>
        <BiTask className='mr-1'/> Savify</h1>
      <p className=' text-left pt-0 pb-0 pl-5 font-sans text-white text-md md:text-xl'>Add, manage and update tasks</p>

      <h2 className="text-xl md:text-2xl mt-16 text-white font-bold pt-3 pb-0 pl-5">Tasks</h2>

      {/* Todos data  */}
      <Todos />
    </div>
  )
}

export default Home