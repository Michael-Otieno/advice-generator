import { useEffect, useState } from "react";
import {ReactComponent as Logo} from './images/icon-dice.svg'


import './App.css';
import Advice from './components/Advice'
import Button from './components/Button'



function App() {

  const [randomAdvice, setRandomAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const getNewAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();

    setRandomAdvice(data.slip.advice);
    setAdviceId(data.slip.id)
  }
  

  useEffect(() => {
    getNewAdvice();
  }, [])

  return (
    <div className="App">
      <Advice 
      randomAdvice={randomAdvice}
      setRandomAdvice={setRandomAdvice}
      adviceId={adviceId}
      setAdviceId={setAdviceId}
      />
      <Button 
      getNewAdvice={getNewAdvice}
      />
    </div>
  );
}

export default App;
