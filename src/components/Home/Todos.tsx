import React from 'react'
import Todo from './Todo';
import { useTodos } from '../../contexts/TodosContext';



const Todos: React.FC = () =>{
  const { todos } = useTodos();
  const Todos = todos.reverse() //reversed this to make sure that the newly added items goes to the top of the list and not the last

  return (
    <div className='bg-transparent w-full h-full pt-2'>
        {todos.length <= 0 ? <p className='text-center p-2 text-gray-300 text-md'>No tasks added yet! Add above</p> : (
          <ul className='w-full h-full lg:block p-3'>
            {
              Todos.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
              ))
            }
          </ul>
        )
        }
    </div>
  );
}

export default Todos