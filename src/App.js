import Board from './Board';
import Button from './Button';
import { useState } from 'react';
import logoImg from './assets/logo.png';
import './css/App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myNum, setMyNum] = useState(1);
  const [otherNum, setOtherNum] = useState(1);
  const [mySum, setMySum] = useState(0);
  const [otherSum, setOtherSum] = useState(0);
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setMyNum(nextNum);
    setOtherNum(nextOtherNum);
    setMySum(mySum + nextNum);
    setOtherSum(otherSum + nextOtherNum);
    setMyHistory([...myHistory, nextNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyNum(1);
    setOtherNum(1);
    setMySum(0);
    setOtherSum(0);
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className='App'>
      <img className='App-logo' src={logoImg} alt='logo'></img>
      <h1 className='App-title'>주사위게임</h1>
      <div>
        <Button className='App-button' color='blue' onClick={handleRollClick}>던지기</Button>
        <Button className='App-button' color='red' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='App-boards'>
        <Board
          className='App-board'
          name='나'
          color='blue'
          num={myNum}
          history={myHistory.join(', ')}
          sum={mySum}
          winner={myNum > otherNum}
        />
        <Board
          className='App-board'
          name='상대'
          color='red'
          num={otherNum}
          history={otherHistory.join(', ')}
          sum={otherSum}
          winner={otherNum > myNum}
        />
      </div>
    </div>
  );
}

export default App;
