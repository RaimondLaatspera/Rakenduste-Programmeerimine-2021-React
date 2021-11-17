import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import Numbers from './components/Numbers';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Raimo" age="34" gender="male"/>
      <Greeting name="Raimond" age="22" gender="apache helicopter"/>
      <Greeting name="Juhan" age="69" gender="female"/>
      <Numbers 
      value={1} 
      amount={5} 
      />

     <Numbers 
      value={0} 
      amount={69420} 
      />
      
      <Numbers 
      value={125} 
      amount={-25} 
      />
      
    </div>
  );
}

export default App;
