const Course = (props) => {
  console.log(props);
  const { parts } = props.course;
  return (
    <>
      <Header text={props.course.name} />
      <Content parts={parts} />
    </>
  );
};

export default Course;

const Content = (props) => {
  console.log("Content: ", props);
  const { parts } = props;
  return (
    <div>
      <Parts parts={parts} />
      <b>
        <Statistics parts={parts} />
      </b>
    </div>
  );
};

const Parts = (props) => {
  console.log("Parts:", props);
  const { parts } = props;
  return (
    <>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Statistics = (props) => {
  console.log("Statistics:", props);
  const { parts } = props;
  console.log("Parts Stats:", parts);
  let total = parts.map((part) => part.exercises);
  console.log("Total Stats:", total);
  total = total.reduce((sum, a) => sum + a, 0);
  return <div>Total of {total} exercises</div>;
};

const Header = (props) => {
  console.log("Header:", props);
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};
