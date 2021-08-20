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
      question: "Quelle méthode de React Component est appelé après le composant est rendu pour la première fois?",
      answers: [
        {
          text: "componentDidUpdate",
          correct: false,
        },
        {
          text: "componentDidMount",
          correct: true,
        },
        {
          text: "componentMounted",
          correct: false,
        },
        {
          text: "componentUpdated",
          correct: false,
        },
      ]
    },
    {
      id: 2,
      question: "React est principalement utilisé pour construire ___",
      answers: [
        {
          text: "Base de données",
          correct: false,
        },
        {
          text: "Connectivité",
          correct: false,
        },
        {
          text: "Interface d'utilisateur",
          correct: true,
        },
        {
          text: "Plateforme de conception",
          correct: false,
        },
      ]
    },
    {
      id: 3,
      question: "In the UK, the abbreviation NHS stands for National what Service?",
      answers: [
        {
          text: "Humanity",
          correct: false,
        },
        {
          text: "Health",
          correct: true,
        },
        {
          text: "Honour",
          correct: false,
        },
        {
          text: "Household",
          correct: false,
        },
      ]
    },
    {
      id: 4,
      question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answers: [
        {
          text: "Elsa",
          correct: false,
        },
        {
          text: "Sleeping Beauty",
          correct: false,
        },
        {
          text: "Cinderella",
          correct: true,
        },
        {
          text: "Pocahontas",
          correct: false,
        },
      ]
    },
    {
      id: 5,
      question: "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
      answers: [
        {
          text: "Hangar",
          correct: false,
        },
        {
          text: "Terminal",
          correct: false,
        },
        {
          text: "Concourse",
          correct: false,
        },
        {
          text: "Carousel",
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
