import { useState } from 'react';
import { Copy } from 'react-feather';
import Slider from './components/Slider';
import ConditionItem from './components/ConditionItem';
import './App.css';

type ConditionId = 'uppercase' | 'lowercase' | 'number' | 'symbol';
interface Condition {
  id: ConditionId;
  value: string;
}
const conditions: Condition[] = [
  {
    id: 'uppercase',
    value: 'Include Uppercase Letters',
  },
  {
    id: 'lowercase',
    value: 'Include Lowercase Letters',
  },
  {
    id: 'number',
    value: 'Include Numbers',
  },
  {
    id: 'symbol',
    value: 'Include Symbols',
  },
];

function App() {
  const [passwordGenerated, setPasswordGenerated] = useState(false);
  const [passwordLength, setPasswordLength] = useState([8]);
  const [selectedCondition, setSelectedCondition] = useState<ConditionId[]>([]);

  const handleChange = (selected: boolean, id: ConditionId) => {
    if (selected && !selectedCondition.includes(id)) {
      setSelectedCondition([...selectedCondition, id]);
    } else if (!selected && selectedCondition.includes(id)) {
      setSelectedCondition(selectedCondition.filter((item) => item !== id));
    }
  };

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
        <div className="conditions-wrapper">
          {conditions.map(({ id, value }) => (
            <ConditionItem
              key={id}
              id={id}
              selected={selectedCondition.includes(id)}
              onChange={(selected) => handleChange(selected, id)}
            >
              {value}
            </ConditionItem>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
