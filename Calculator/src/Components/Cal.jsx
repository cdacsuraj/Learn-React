import React from "react";
import './Cal.css';

const Cal = () => {
    const display = React.useRef(null)

    const appendToDisplay=(input) => {
        display.current.value += input
    }

    const clearDisplay =() => {
        display.current.value = "";
    }

    const calculate = () =>{
        try {
            display.current.value = eval(display.current.value)
        }catch(error){
            display.current.value = "Error";
        }
    }

    return(
        <div id="calculator">
            <input id="display" ref={display} readOnly/>
            <div id="keys">
                <button onClick={()=>appendToDisplay('+')} className="operator">+</button>
                <button onClick={()=>appendToDisplay('7')}>7</button>
                <button onClick={()=>appendToDisplay('8')}>8</button>
                <button onClick={()=>appendToDisplay('9')}>9</button>
                <button onClick={()=>appendToDisplay('-')} className="operator">-</button>
                <button onClick={()=>appendToDisplay('4')}>4</button>
                <button onClick={()=>appendToDisplay('5')}>5</button>
                <button onClick={()=>appendToDisplay('6')}>6</button>
                <button onClick={()=>appendToDisplay('*')} className="operator">*</button>
                <button onClick={()=>appendToDisplay('1')}>1</button>
                <button onClick={()=>appendToDisplay('2')}>2</button>
                <button onClick={()=>appendToDisplay('3')}>3</button>
                <button onClick={()=>appendToDisplay('/')} className="operator">/</button>
                <button onClick={()=>appendToDisplay('0')}>0</button>
                <button onClick={()=>appendToDisplay('.')}>.</button>
                <button onClick={calculate}>=</button>
                <button onClick={clearDisplay}>Clr</button>

            </div>
        </div>
    )
}

export default Cal;