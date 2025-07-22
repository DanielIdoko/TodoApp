import React from 'react'
import Todo from './Todo'






type todo = {
  id: number,
  title: string,
  checkedTodo: boolean
}

const todos = [
  {
    id: 0,
    title: 'Todo1',
    checkedTodo: false
  },
  {
    id: 1,
    title: 'Todo1',
    checkedTodo: false
  },
  {
    id: 2,
    title: 'Todo1',
    checkedTodo: false
  },
  {
    id: 3,
    title: 'Todo1',
    checkedTodo: false
  }
]


function Todos() {


  return (
    <div className='bg-transparent w-full h-full pt-4'>
      <ul className='w-full h-full lg:block p-3'>
        {
          todos.map((todo: todo) => (
            <Todo 
             title={todo.title}
            //  key={}
             checked={todo.checkedTodo}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Todos