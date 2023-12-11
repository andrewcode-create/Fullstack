const Header = (props) => {
  console.log("Header:", props);
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};
export default Header;
