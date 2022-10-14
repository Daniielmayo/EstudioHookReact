import React, { useMemo, useState } from 'react'
import { useCounter } from '../Hooks'



  const heavySuff = (iteratioNumer = 100)=>{
    for (let index = 0; index < iteratioNumer; index++) {
      console.log('Ahí vamos')
      
    }
    return `${iteratioNumer} iteraciones realizadas`

  }



export const MemoHook = () => {

    const {counter,incrementar} =useCounter(1000)
    const [show, setShow] = useState(true);

    const memorizedValue= useMemo(() => heavySuff(counter), [counter])

  return (
    <>
            <h1>Counter:  <small>{counter}</small> </h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button className='btn btn-primary'
            onClick={()=> incrementar()}>
                +1
            </button>

            <button className='btn btn-outline-primary'
            onClick={()=> setShow (!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
    </>
  )
}
