import React, { useEffect, useState } from "react";
import data from "../database/data";

import { useFetchQestion } from '../hooks/FetchQuestion'
import { useSelector } from "react-redux";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  
  const [{ isLoading, apiData, serverError}] = useFetchQestion() 



const questions = useSelector(state => state.questions.queue[state.question.trace] )
 const trace = useSelector(state =>state.questions.trace)
  useEffect(() => {

    
  });

  function onSelect() {
    console.log(questions);
  }


  if(isLoading) return <h3 className='text-light'>isLoading</h3>
  if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>


  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
