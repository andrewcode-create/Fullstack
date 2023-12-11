const Statistics = (props) => {
  console.log("Statistics:", props);
  const { parts } = props;
  console.log("Parts Stats:", parts);
  let total = parts.map((part) => part.exercises);
  console.log("Total Stats:", total);
  total = total.reduce((sum, a) => sum + a, 0);
  return <div>Total of {total} exercises</div>;
};

export default Statistics;
