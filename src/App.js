import { useEffect, useMemo, useState } from "react";
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from  './components/Start'
import "./App.css";
function App() {
  // 1 pour le premier question qui va etre afficher
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("0 DT")
  const [username,setUsername]=useState(null)
  const data = [
    {
      id: 1,
      question: "1 + 1 = ?",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ]
    },
    {
      id: 2,
      question: "11 * 11 = ?",
      answers: [
        {
          text: "11",
          correct: false,
        },
        {
          text: "12",
          correct: false,
        },
        {
          text: "121",
          correct: true,
        },
        {
          text: "111",
          correct: false,
        },
      ]
    },
    {
      id: 3,
      question: "5 - 5 = ?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "0",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ]
    },
    {
      id: 4,
      question: "9 * 9 = ?",
      answers: [
        {
          text: "81",
          correct: true,
        },
        {
          text: "0",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "9",
          correct: false,
        },
      ]
    },
    {
      id: 5,
      question: "100 + 90 - 50 + 10 = ?",
      answers: [
        {
          text: "100",
          correct: false,
        },
        {
          text: "200",
          correct: false,
        },
        {
          text: "5000",
          correct: false,
        },
        {
          text: "150",
          correct: true,
        },
      ]
    },
  ];
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "100 DT" },
      { id: 2, amount: "200 DT" },
      { id: 3, amount: "300 DT" },
      { id: 4, amount: "400 DT" },
      { id: 5, amount: "500 DT" },
      { id: 6, amount: "600 DT" },
      { id: 7, amount: "700 DT" },
      { id: 8, amount: "800 DT" },
      { id: 9, amount: "900 DT" },
      { id: 10, amount: "1000 DT" },
      { id: 11, amount: "1100 DT" },
      { id: 12, amount: "1200 DT" },
      { id: 13, amount: "1300 DT" },
      { id: 14, amount: "1400 DT" },
      { id: 15, amount: "1500 DT" },

    ].reverse(), []);
  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);

  }, [moneyPyramid, questionNumber])
  return (
    <div className="App">
      {username ? (<>
        <div className="main">
        <div className="Name">{username} </div>
        {stop ? <h1 className="endText" >You earned: {earned} </h1> : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setStop={setStop}
                  questionNumber={questionNumber}
                /></div>
            </div>
            <div className="bottom">
              <Quiz
                data={data}
                questionNumber={questionNumber}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber} />
            </div>


          </>


        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {
            moneyPyramid.map(m => (
              <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))
          }




        </ul>
      </div>
    
      
      
       </>) 
       : <Start  setUsername={setUsername} />}
 </div>
  );
}

export default App;
