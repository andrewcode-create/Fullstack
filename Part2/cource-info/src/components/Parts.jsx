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

export default Parts;
