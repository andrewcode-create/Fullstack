import Statistics from "./Statistics";
import Parts from "./Parts";

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

export default Content;
