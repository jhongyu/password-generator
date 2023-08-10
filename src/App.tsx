import { useState } from 'react';
import { Copy } from 'react-feather';
import Slider from './components/Slider';
import './App.css';

function App() {
  const [passwordGenerated, setPasswordGenerated] = useState(false);
  const [passwordLength, setPasswordLength] = useState([8]);

  return (
    <main>
      <p className="title">Password Generator</p>
      <div className="result">
        <div className="password-wrapper">
          <p className={`password ${passwordGenerated ? 'active' : ''}`}>
            12345678
          </p>
          <Copy className="copy" onClick={() => setPasswordGenerated(true)} />
        </div>
      </div>
      <div className="generator-wrapper">
        <div className="length-wrapper">
          <div className="length">
            <span>Character Length</span>
            <span>{passwordLength}</span>
          </div>
          <div className="length-input">
            <Slider
              value={passwordLength}
              onChange={(value) => setPasswordLength(value)}
              min={8}
              max={30}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
