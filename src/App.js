import "./App.css";
function App() {
  const moneyPyramid = [
    {id:1 , amount:"100 DT"},
    {id:2 , amount:"200 DT"},
    {id:3 , amount:"300 DT"},
    {id:4 , amount:"400 DT"},
    {id:5 , amount:"500 DT"},
    {id:6 , amount:"600 DT"},
    {id:7 , amount:"700 DT"},
    {id:8 , amount:"800 DT"},
    {id:9 , amount:"900 DT"},
    {id:10 , amount:"1000 DT"},
    {id:11 , amount:"1100 DT"},
    {id:12 , amount:"1200 DT"},
    {id:13 , amount:"1300 DT"},
    {id:14 , amount:"1400 DT"},
    {id:15 , amount:"1500 DT"},

  ].reverse();
  return (
    <div className="App">
     <div className="main">
     main
     </div>
     <div className="pyramid">
    <ul className="moneyList">
      {
        moneyPyramid.map(m=>(
<li className="moneyListItem">
  <span className="moneyListItemNumber">{m.id}</span>
  <span className="moneyListItemAmount">{m.amount}</span>
</li>
        ))
      }




    </ul>
     </div>
    </div>
  );
}

export default App;
