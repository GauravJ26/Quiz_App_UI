import React from 'react'
import '../styles/Result.css'

import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

const Result = () => {
 
  function onRestart(){
    console.log('on Restart')
  }

    return (
    <div className='container'> 
        <h1 className='title text-light'>Quiz Application</h1>
   
   <div className='result flex-center'>
    <div className='flex'>
        <span>Username</span>
        <span>Daily Tution</span>
    </div>

    <div className='flex'>
        <span>Total Quiz Points :</span>
        <span>50</span>
    </div>

    <div className='flex'>
        <span>Total Earned Points</span>
        <span>30</span>
    </div>

    <div className='flex'>
        <span>Quiz Result</span>
        <span>Passed</span>
    </div>

   </div>
   <div className='start'>
<Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
    </div>

<div className='container'>
    <ResultTable></ResultTable>
</div>

    </div>
  )
}

export default Result