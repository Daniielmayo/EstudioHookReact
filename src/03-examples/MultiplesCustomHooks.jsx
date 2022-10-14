import React from 'react'
import { useCounter, useFech } from '../Hooks'
import {LoadingQuote, Quote} from './'

export const MultiplesCustomHooks = () => {


    const {counter, incrementar} = useCounter(1)
    
    const {data, isLoading, hasError} = useFech(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {author, quote}= !!data && data[0]
        
  return (
    <>
        <h1>BrackingBad Quotes</h1>   
        <hr/>

        {
            isLoading
           ? <LoadingQuote/>
           : <Quote author={author} quote={quote}/>
        }


        <button className='btn btn-primary' onClick={()=>incrementar()}>
            next quote
        </button>
    </>
  )
}
