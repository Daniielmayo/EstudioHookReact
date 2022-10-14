import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'
import { ItemTodo } from './ItemTodo'
import { useTodos } from '../Hooks/useTodos'






export const TodoApp = () => {

    
    const {todos, handDeleteTodo, handToggleTodo, handNewTodo,todosCount,pendingTodosCount} = useTodos()

  return (
    <>
        <h1>TodoApp: {todosCount} , <small>pendientes : {pendingTodosCount}</small></h1>
        <hr />

        <div className='row'>
            <div className="col-7">
            <TodoList 
            todos={todos} 
            onDeleteTodo={handDeleteTodo}
            onToggleTodo={handToggleTodo} />
                
            </div>
            <div className='col-5'>
                <h4>Agregar</h4>
                <hr />
                <TodoAdd onNewTodo={handNewTodo}/>
            </div>
        </div>
    </>
  )
}
