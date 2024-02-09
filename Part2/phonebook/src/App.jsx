import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Testfirstname Testlastname", number: "000-000-0000", id: 0 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

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

  const handleSearchChange = (event) => {
    //console.log(event.target.value);
    setNewSearch(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const Person = ({ person }) => {
    return (
      <p>
        ★ {person.name} ★ {person.number} ★
      </p>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      Search: <input value={newSearch} onChange={handleSearchChange} />
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
          <br />
          Number: <input value={newNumber} onChange={handleNumberChange} />
          <div>
            debug: {newName}, {newNumber}, {newSearch}
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newSearch.toLowerCase())
        )
        .map((person) => (
          <Person person={person} key={person.id} />
        ))}
    </div>
  );
};

export default App;
