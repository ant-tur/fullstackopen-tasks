import { useState } from 'react';

const Button = ({ onClick, text, emoji }) => {
  return (
    <button onClick={onClick}>
      {emoji} {text}
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => setGood(good + 1)} emoji="👍" text="good" />
        <Button
          onClick={() => setNeutral(neutral + 1)}
          emoji="😐"
          text="neutral"
        />
        <Button onClick={() => setBad(bad + 1)} emoji="👎" text="bad" />
      </div>
      <h2>statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
};

export default App;
