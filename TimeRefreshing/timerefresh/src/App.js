import React , { useState } from "react";
import './App.css';

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
  }
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>get time</button>
    </>
  );
}

export default App;
