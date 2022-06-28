import Keypad from "./keypad";
import ResultCom from "./resultcom";
import React, {useState} from 'react';
import './App.css';

function App(){

  const [Answer , setAnswer] = useState("");

  const calculate = () => {
    let CheckResult = "";
    if(Answer.includes("x")){
      let x = Answer.replace("x","*");
      CheckResult = eval(x);
      setAnswer(CheckResult);
    }
    else{
    CheckResult = eval(Answer);
    setAnswer(CheckResult);
    }
  }

  const backspace = () => {
    setAnswer(Answer.slice(0,-1));
  }

  const Reset = () => {
    setAnswer("");
  }

  const ifClick = (keyvalue) =>{
    if(keyvalue === "="){
      calculate();
    }

    else if(keyvalue === "C"){
      backspace();
    }

    else if(keyvalue === "CE"){
      Reset();
    }

    else{
      setAnswer(Answer + keyvalue );
    }
  }

  return (
    <div className="calbody">
      <h1 className="label">Kosta's Calculator</h1>
      <ResultCom Result = {Answer} />
      <Keypad HitClick = {ifClick} />
    </div>
  );
}

export default App;