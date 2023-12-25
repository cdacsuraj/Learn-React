import { useState } from 'react'

function App() {

  const [color, setcolor] = useState("olive")

  return (

      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>
              <button
              onClick={() => setcolor("red")}
              className='outline-none px-4 py-1 rounded-full'
              style={{backgroundColor: "red"}}>red</button>
               <button
               onClick={() => setcolor("green")}
              className='outline-none px-4 py-1 rounded-full'
              style={{backgroundColor: "green"}}>Green</button>
               <button
               onClick={() => setcolor("blue")}
              className='outline-none px-4 py-1 rounded-full'
              style={{backgroundColor: "blue"}}>Blue</button>
      </div>

  )
}

export default App
