import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 0 }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      console.log(`${newName} is already added to phonebook`);
      return;
    }
    const obj = {
      name: newName,
      id: persons.length,
    };
    setPersons(persons.concat(obj));
    setNewName("");
  };

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const Person = ({ name }) => {
    return <p>{name}</p>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <div>debug: {newName}</div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person name={person.name} key={person.id} />
      ))}
    </div>
  );
};

export default App;
