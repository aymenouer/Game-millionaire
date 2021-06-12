import React, { useEffect, useState } from 'react'

function Quiz({data,questionNumber,setTimeOut,setQuestionNumber}) {
    
    const [question,setQuestion]=useState(null);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [className,setClassName]=useState(null);
   const handleClick = (a)=> {
    setSelectedAnswer(a)
    }
    useEffect(() => {
        setQuestion(data[questionNumber-1])
        setClassName("answer active");
    }, [data,questionNumber])
    return (
        <div className="Quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
         {question?.answers.map((a)=>(
            <div className={selectedAnswer === a ? className : "answer" } onClick={()=>handleClick(a)} >{a.text}</div>
            ))}


            </div>
        </div>
    )
}

export default Quiz
