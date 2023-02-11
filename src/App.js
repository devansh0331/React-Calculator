import React, {useState} from "react";
import Calculator from "./Components/Calculator";
import { Container, Previous, Screen , Current , Button} from "./styles/Main";


function App() {

  const [current , setCurrent] = useState('')
  const [previous , setPrevious] = useState('')
  const [operations , setOperations] = useState('')

  const handleBtnClick = (e) => {
    const val = e.target.getAttribute('data')
    if(val === '.' && current.includes('.')) return
    setCurrent(current + val)
  }

  const handleAC = () => {
    setCurrent("")
    setOperations('')
    setPrevious('')
  }

  const handleDEL = (e) => {
    setCurrent(String(current).slice(0 , -1))
  }

  const handleOperation = (e) => {
      if(current === '') return
      if(previous !== '') {
        let val = compute();
        setPrevious(val)
      }else{
        setPrevious(current)
      }

      setCurrent('')
      setOperations(e.target.getAttribute('data'))
  }

  const handleEquals = (e) =>{
    let val = compute()
    if(val === undefined || val === null) return
    setCurrent(val)
    setPrevious('')
    setOperations('')
  }

  const compute = () => {

    let result;
    let previousNumber = parseFloat(previous)
    let currentNumber = parseFloat(current)
    if(isNaN(previousNumber) || isNaN(currentNumber)) return

    switch(operations){
      case '÷':
        result = previousNumber/currentNumber;
        break;
      case 'x':
        result = previousNumber*currentNumber;
        break;
      case '+':
        result = previousNumber+currentNumber;
        break;
      case '-':
        result = previousNumber-currentNumber;
        break;

      default: return;

    }

    return result;
  }
  return (
    <>
      <Container>
        <Screen>
      <Previous>{previous} {operations}</Previous>
      <Current>{current}</Current>
    {/* <h1>Main App</h1> */}
        </Screen>

        <Button gridSpan={2} control onClick={handleAC}>AC</Button>
        <Button onClick={handleDEL}>DEL</Button>
        <Button data={'÷'} operation onClick={handleOperation}>÷</Button>
        <Button data={7} onClick={handleBtnClick}>7</Button>
        <Button data={8} onClick={handleBtnClick}>8</Button>
        <Button data={9} onClick={handleBtnClick}>9</Button>
        <Button data={'x'} operation onClick={handleOperation}>X</Button>
        <Button data={4} onClick={handleBtnClick}>4</Button>
        <Button data={5} onClick={handleBtnClick}>5</Button>
        <Button data={6} onClick={handleBtnClick}>6</Button>
        <Button data={'+'} operation onClick={handleOperation}>+</Button>
        <Button data={1} onClick={handleBtnClick}>1</Button>
        <Button data={2} onClick={handleBtnClick}>2</Button>
        <Button data={3} onClick={handleBtnClick}>3</Button>
        <Button data={'-'} operation onClick={handleOperation}>-</Button>
        <Button data={'.'} onClick={handleBtnClick} decimal>.</Button>
        <Button data={0} onClick={handleBtnClick}>0</Button>
        <Button gridSpan={2} equals onClick={handleEquals}>=</Button>
      </Container>
    
      
    </>
  );
}

export default App;
