import './App.scss';
import {useState} from "react";

function App() {
  const [calculation, setCalculation]=useState('')
  const [output, setOutput]=useState('')
  const actions = ['/', '*', '+', '-', '.']
  const updateCalculation=(value: string)=>{

    if(
        actions.includes(value) && calculation === '' ||
        actions.includes(value) && actions.includes(calculation.slice(-1))
    ){
      return
    }
    setCalculation(calculation+value)

    if (!actions.includes(value)){
      setOutput(eval(calculation+value).toString().replace('@','/'))
    }

  }
  const createDigits =()=>{
    const digits=[]

    for (let i=1;i<10; i++){
      digits.push(
          <button onClick={()=>updateCalculation(i.toString())} key={i}>{i}</button>
      )
    }
    return digits
  }
  const calculate=()=>{
    setCalculation(eval(calculation.replace('÷', '/' ).replace( '×', '*')).toString())
  }
  const clear=()=>{
    if(calculation === ''){
      return
    }
    const value=calculation.slice(0,-1)
    setCalculation(value)
  }

  return (
      <div className="calculator">
        <h1> React Calculator With React Hooks</h1>

        <div className="calc-grid">
          <div className='output'>
            {calculation||'0'}



          </div>

          <div>
            <div className='ops'>

              <button onClick={()=>{updateCalculation('÷')}} >÷</button>
              <button onClick={()=>{updateCalculation('×')}}>×</button>
              <button onClick={()=>{updateCalculation('+')}}>+</button>
              <button onClick={()=>{updateCalculation('-')}}>-</button>
              <button onClick={clear}> <img  width={40} height={40} src="https://cdn-icons-png.flaticon.com/512/159/159805.png" /></button>
            </div>
            <div className='dig'>

              {createDigits()}

              <button onClick={()=>{updateCalculation('.')}}>.</button>
              <button onClick={()=>{updateCalculation('0')}}>0</button>
              <button style={{backgroundColor:'orange'}} onClick={calculate}>=</button>
            </div>
          </div>


        </div>
      </div>
  );
}

export default App;
