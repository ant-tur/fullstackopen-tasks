import { useState } from 'react';

const Button = ({ onClick, text, emoji }) => {
  return (
    <button onClick={onClick}>
      {emoji} {text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text === 'positive' ? (
        <p>
          {text} {value} %
        </p>
      ) : (
        <p>
          {text} {value}
        </p>
      )}
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h2>statistics</h2>
          <div>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </div>
        </>
      )}
    </>
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

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={handleClickGood} emoji="👍" text="good" />
        <Button onClick={handleClickNeutral} emoji="😐" text="neutral" />
        <Button onClick={handleClickBad} emoji="👎" text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
