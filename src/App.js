import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(50);

  const IncNumber = () => {
    setNumber((number) => number + 1)
  }

  const DecNumber = () => {
    setNumber((number) => number - 1)
  }
  return (
    <div className="App">
      <h1 className='heading-text'>{number}</h1>
      <button onClick={IncNumber}>Increase</button>
      <button onClick={DecNumber}>Decrease</button>

    </div>
  );
}

export default App;
