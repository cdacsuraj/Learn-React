import { useState } from 'react'

import './App.css'

function App() {

  // let counter = 5;

   let [counter, setCounter] = useState(5)

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Hello Reactawa</h1>
     <h1>counter value: {counter}</h1>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
