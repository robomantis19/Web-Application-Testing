import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
// import { useLocalStorage, useDisplay } from './components/Display';
import Display from './components/Display';
import Dashboard from './components/Dashboard'; 
import './App.css';

function App() {
  // const [ball, setBall] = useLocalStorage('ball', 0); 
  // const [strike, setStrike] = useLocalStorage('strike', 0);

  // const[ strikevalue, ballvalue] = useDisplay(strike, ball)

  const [ball, setBall] = useState(0); 
  const [strike, setStrike] = useState(0); 
  const [hit, setHit] = useState(false); 
  const [foul, setFoul] = useState(0); 

  useEffect(() => { 
    if(foul === 1 && strike === 0 || strike === 1 ) {
      setStrike(strike + 1)
    }
  },[foul])
  return (
    <div className="App">
      <Display  hit={hit} strike={strike}
      ball={ball} setBall={setBall} setStrike={setStrike}/>
      <Dashboard foul={foul} setFoul={setFoul} setHit={setHit} setBall={setBall} setStrike={setStrike} ball={ball} strike={strike}/> 
      {/* <button onClick = {() => setFoul(foul + 1)} > Foul </button>
      {foul === 1 ? setStrike(strike + 1) : false} */}
      
    </div>
  );
}

export default App;
