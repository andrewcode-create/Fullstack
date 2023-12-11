import Header from "./Header";
import Content from "./Content";
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

/*
const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </>
);
*/
