import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ [selected]: 0 });
  //let mostvoted = 0;
  //let mostvotedvotes = 0;

  const handleClickVote = () => {
    console.log("Click, votes: ", votes);
    console.log("changed votes at ", selected, "to", votes[selected] + 1);
    debugger;
    if (votes[selected] + 1 > mostvotedvotes) {
      //new most voted
      mostvoted = selected;
      mostvotedvotes++;
    }
    setVotes({ ...votes, [selected]: votes[selected] + 1 });
  };

  const handleClickRandom = () => {
    let nselected = Math.floor(Math.random() * anecdotes.length);
    setSelected(nselected);
    if (isNaN(votes[nselected])) {
      console.log(
        "found error, fixing. Votes is",
        votes,
        "nselected is",
        nselected
      );
      setVotes({ ...votes, [nselected]: 0 });
    }
  };

  //console.clear();
  console.log("re-render");
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <Button text="Vote" onClick={handleClickVote} />
      <Button text="Randomize" onClick={handleClickRandom} />
      <h1>Most voted anecdote</h1>
      <p>{anecdotes[mostvoted]}</p>
    </div>
  );
};
export default App;
