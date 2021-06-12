import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "../assets/music/play.mp3"
import correct from "../assets/music/correct.mp3"
import wrong from "../assets/music/wrong.mp3"
function Quiz({data,questionNumber,setStop,setQuestionNumber}) {
    
    const [question,setQuestion]=useState(null);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [className,setClassName]=useState(null);
    const [letsPlay] =useSound(play)
    const [correctAnswer] =useSound(correct)
    const [wrongAnswer] =useSound(wrong)

    useEffect(()=>{
        letsPlay();
    },[letsPlay]);


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
     
        delay(5000, ()=>  {
            if (a.correct)
            {
                correctAnswer();
                delay(1000,()=>{
                    setQuestionNumber((prev)=>prev+1);
                    setSelectedAnswer(null);
                });
                
                
            }
            else
            {
                wrongAnswer();
                delay(1000,()=>{
                    setStop(true);
                });
            
              
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
