import { useEffect, useState } from "react"
import { Message } from "./Message";




export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username : 'strider',
        email: 'daniielmayo@google.com'
    })
    const {username, email} = formState;

    const onInputChange = ({target})=>{
        const {name, value}= target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        // console.log('useEffect called')
    },[])

    useEffect(()=>{
        // console.log('formState changed')
    },[formState]);
    

    useEffect(()=>{
        // console.log('email changed')
    },[email]);
    

  return (
    <>
        <h1>Formulario Simple</h1> 

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
        name='emai'
        value={email}
        onChange={onInputChange} />

        {
              (username === 'strider2')   && <Message/>
        }

    </>
  )
}
