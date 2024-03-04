import { useState, useEffect } from "react";
import Person from "./components/Person";
import SearchBox from "./components/SearchBox";
import PersonForm from "./components/PersonForm";
import axios from "axios";
import personService from "./services/persons";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    console.log("getting the phonebook...");
    personService.getAll().then((people) => {
      console.log(`got initial ${people.length} people`);
      setPersons(people);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    if (newName === "") {
      alert(
        `You left the name field empty. This cannot be added to the phonebook. `
      );
      return;
    }
    if (newNumber === "") {
      alert(
        `You left the number field empty. This cannot be added to the phonebook. `
      );
      return;
    }
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      console.log(`${newName} is already added to phonebook`);
      return;
    }
    const obj = {
      name: newName,
      number: newNumber,
      //id: persons.length + 1,
    };
    personService.create(obj).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
      console.log(
        `added ${returnedPerson.name} to server with number ${returnedPerson.number} and ID ${returnedPerson.id}`
      );
    });
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

  return (
    <div>
      <h2>Phonebook</h2>
      Search: <SearchBox value={newSearch} onChange={handleSearchChange} />
      <PersonForm
        nameval={newName}
        handleNameChange={handleNameChange}
        numval={newNumber}
        handleNumberChange={handleNumberChange}
        onsubmit={addName}
      />
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
