
import { ItemTodo } from './ItemTodo'

export const TodoList = ({todos = [], onDeleteTodo,onToggleTodo}) => {



  return (
    
    <ul className='list-group'>
      {
        todos.map(todo =>(
                <ItemTodo 
                key={todo.id} 
                todo ={todo}  
                onDeleteTodo={onDeleteTodo}  
                onToggleTodo={onToggleTodo}/>
           
            ))
                    } 
    </ul>

    
    
  )
}
