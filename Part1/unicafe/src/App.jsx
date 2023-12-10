import { useState } from "react";

const StatisticLine = ({ text, value, suffix }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>
        {value}
        {suffix}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  if (all === 0) {
    return <p>No Feedback Given</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={(good - bad) / all} />
          <StatisticLine
            text="positive"
            value={(good * 100) / all}
            suffix=" %"
          />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //console.clear();
  console.log("re-render");
  //debugger;
  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};
export default App;
