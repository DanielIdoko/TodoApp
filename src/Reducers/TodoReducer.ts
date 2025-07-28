
// Types for reducers
type Todo = {
  id: number,
  title: string,
  completed: boolean
}

type TodoActions = 
| {type: 'ADD_TODO', payload: string} 
| {type: 'DELETE_TODO', payload: number} 
| {type: 'TOGGLE_TODO', payload: number} 
| {type: 'SET_TODOS', payload: Todo[]} 



const handleTodoReducer = (state: Todo[], action: TodoActions): Todo[] =>{
  // this code will check from react reducers if our actions are ready for use
  if(!action){
    return state
  }

  // Switch for action type
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {id: Math.random(), title: action.payload, completed: false}
      ];
    case 'DELETE_TODO':
      return state.filter((todo: any) => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.reverse().map((todo: any) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
    case 'SET_TODOS':
      return action.payload;
    default:
      const _exhaustedCheck: never = action;
      return state;
  }
}


export default handleTodoReducer;