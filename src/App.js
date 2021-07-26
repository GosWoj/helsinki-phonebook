import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
    },
  ]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: newName,
    };
    const samePerson = persons.find((p) => p.name === newName);

    if (samePerson) {
      window.alert(`${newName} already exists!`);
    } else {
      setPersons(persons.concat(person));
      setNewName("");
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleChange} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
