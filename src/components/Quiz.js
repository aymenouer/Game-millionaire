import React, { useEffect, useState } from 'react'

function Quiz({data,questionNumber,setStop,setQuestionNumber}) {
    
    const [question,setQuestion]=useState(null);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [className,setClassName]=useState(null);
 
    useEffect(() => {
        setQuestion(data[questionNumber-1]);
        
    }, [data,questionNumber]);
    const delay =(duration , callback)=> {
setTimeout(()=>{
callback()
},duration);
    };
    const handleClick = (a)=> {
        setSelectedAnswer(a);
        setClassName("answer active");
        // delay function khater ana animation f css kn bch nkhali b timeout trasili tcharji quiz lbadou 
        delay(3000, ()=>  setClassName(a.correct ? "answer correct" : "answer wrong"));
     
        delay(6000, ()=>  {
            if (a.correct)
            {
                setQuestionNumber((prev)=>prev+1);
                setSelectedAnswer(null);
            }
            else
            {
                setStop(true);
            }
        });
     
        };
        
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
