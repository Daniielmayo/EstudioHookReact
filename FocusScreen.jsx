import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef =useRef()


    const onclick = ()=>{
        inputRef.current.select()
    }

  return (

        <>
             <h1>Focus Screen</h1>
             <hr />
             <input 
             ref={inputRef}
             type="text"
             placeholder='ESCRIBE TU NOMBRE' 
             className='form-control mt-3'/>

             <button className='btn btn-primary mt-2'
             onClick={onclick}>
                    set focus
             </button>
         </>  

)
}
