import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, onClick, buttonClassName = "CalcButton" }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const fullname = "Paolo Gabriel M Nievera";
  const section = "IT3A";

  const [disp, setDisp] = useState("0"); // Initialize disp as a string
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [oper, setOper] = useState(null);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (oper === null) {
      setNum1(num1 + value);
      setDisp(num1 + value);
    } else {
      setNum2(num2 + value);
      setDisp(num2 + value);
    }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();
    if (num1 && num2 && oper) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (oper) {
        case "+":
          setDisp(number1 + number2);
          break;
        case "-":
          setDisp(number1 - number2);
          break;
        case "*":
          setDisp(number1 * number2);
          break;
        case "/":
          setDisp(number1 / number2);
          break;
        default:
          setDisp("ERROR");
          alert("Invalid operation!");
          break;
      }
    } else {
      alert("Enter both numbers and an operator!");
    }

    setNum1("");
    setOper(null);
    setNum2("");
  }

  const clearClickHandler = (e) => {
    e.preventDefault();
    setDisp("0");
    setNum1("");
    setOper(null);
    setNum2("");
  }

  const decimalClickHandler = (e) => {
    e.preventDefault();
    if (oper === null) {
      if (!num1.includes(".")) {
        setNum1(num1 + ".");
        setDisp(num1 + ".");
      }
    } else {
      if (!num2.includes(".")) {
        setNum2(num2 + ".");
        setDisp(num2 + ".");
      }
    }
  }

  const surnameButtonClickHandler = () => {
    setDisp(`${fullname}`);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>{` ${fullname} - ${section}`}</h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"^"} onClick={clearClickHandler} />
          <CalcButton label={"%"} onClick={operatorClickHandler} />
          <CalcButton label={"±"} onClick={operatorClickHandler} />
          <CalcButton label={"/"} onClick={operatorClickHandler} />
          <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"*"} onClick={operatorClickHandler} />
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"+"} onClick={operatorClickHandler} />
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"-"} onClick={operatorClickHandler} />
          <CalcButton label={"C"} onClick={clearClickHandler} buttonClassName={"ClearButton"} />
          <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"."} onClick={decimalClickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"="} onClick={equalClickHandler} />
        </div>
        <CalcButton label={"Nievera"} onClick={surnameButtonClickHandler} buttonClassName={"SurnameButton"} />
      </div>
    </div>
  );
}
