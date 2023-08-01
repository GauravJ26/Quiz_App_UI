import React, { useEffect } from 'react'
import Questions from './Questions'

import { useSelector, useDispatch } from 'react-redux'

const Quiz = () => {

const state = useSelector(state => state)

useEffect(()=>{
  console.log(state)
})

    function onNext(){
        console.log('on next click ')
    }

    function onPrev(){
        console.log('on prev click ')
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        

         {/* questions */}
         <Questions/>
         <div className='grid'>          
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
        </div>
        </div>
  )
}

export default Quiz