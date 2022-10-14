import { useEffect, useState } from "react"
import { useForm } from "../Hooks/useForm"





export const ForWithCustomHook = () => {

    const {formState, onInputChange, username,email, password,onResetForm} = useForm({

           username : '',
           email: '',
           password:''
    })

    // const {username, email,password} = formState

    

  return (
    <>
        <h1>Formulario con Custom Hook</h1> 

        <hr />

        <input type="text"
        placeholder='Escribe tu nombre'
        className='form-control'
        name='username'
        value={username} 
        onChange={onInputChange}/>

        <input type="email"
        placeholder='Escribe tu correo'
        className='form-control mt-3'
        name='email'
        value={email}
        onChange={onInputChange} />  
        
        <input type="password"
        placeholder='Escribe tu contraseña'
        className='form-control mt-3'
        name='password'
        value={password}
        onChange={onInputChange} />

       <button onClick={ onResetForm } type="submit" className="btn btn-primary mt-4">Borrar</button>
    </>
  )
}
