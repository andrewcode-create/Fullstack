const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const partarr = [part1, part2, part3];
  const exercisesarr = [exercises1, exercises2, exercises3];

  console.clear();

  return (
    <div>
      <Header course={course} />
      <Content partarr={partarr} exercisesarr={exercisesarr} />
      <Total exercisesarr={exercisesarr} />
    </div>
  );
};
export default App;

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.partarr[0]} exercise={props.exercisesarr[0]} />
      <Part part={props.partarr[1]} exercise={props.exercisesarr[1]} />
      <Part part={props.partarr[2]} exercise={props.exercisesarr[2]} />
    </div>
  );
};
const Total = (props) => {
  return (
    <p>
      {props.exercisesarr[0] + props.exercisesarr[1] + props.exercisesarr[2]}
    </p>
  );
};
