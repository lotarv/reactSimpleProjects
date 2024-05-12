import './index.scss';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  function inc(){
    setCount(c => c + 1);
  }

  function dec(){
    setCount(c => c - 1);
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={dec}>- Минус</button>
        <button className="plus" onClick={inc}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
