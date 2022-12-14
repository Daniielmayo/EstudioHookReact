import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incremetFather = useCallback(
      () => {
        setCounter ( (value)=>value + 1)
      },
      [],
    )
    

    // const incremetFather = ()=>{
    //     setCounter ( counter + 1)
    // }

  return (
    <>
        <h1>useCallback hook : {counter}</h1>
        <hr />
        <ShowIncrement increment={incremetFather}/>
    </>
  )
}
