import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "suraj",
    age: 21
  }
  let newArr = [1, 2, 3] 
 
  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
        
        <Card username="suraj" btnText="click me" />
        <Card username="Mani" btnText="visit me"/>
        <Card username="Avi"/>
        <Card />
    </>
  )
}

export default App
