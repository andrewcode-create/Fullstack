import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);

    setTotal(left + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);

    setTotal(left + right);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>

      <p>total {total}</p>
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default App;
