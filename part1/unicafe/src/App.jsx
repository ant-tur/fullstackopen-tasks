import { useState } from 'react';

const Button = ({ onClick, text, emoji }) => {
  return (
    <button onClick={onClick}>
      {emoji} {text}
    </button>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const allClick = good + bad + neutral;
  const average = (good - bad) / allClick;
  const positive = (good / allClick) * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={handleClickGood} emoji="👍" text="good" />
        <Button onClick={handleClickNeutral} emoji="😐" text="neutral" />
        <Button onClick={handleClickBad} emoji="👎" text="bad" />
      </div>
      <h2>statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {allClick}</p>
        <p>average {allClick ? average : 0}</p>
        <p>positive {allClick ? positive : 0} %</p>
      </div>
    </div>
  );
};

export default App;
