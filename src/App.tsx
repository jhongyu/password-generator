import { useState } from 'react';
import { Copy } from 'react-feather';
import './App.css';

function App() {
  const [passwordGenerated, setPasswordGenerated] = useState(false);

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
    </main>
  );
}

export default App;
