import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };
    const samePerson = persons.find((p) => p.name === newName);

    if (samePerson) {
      window.alert(`${newName} already exists!`);
    } else {
      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} handleFilter={handleFilter} />
      <h2>Add someone</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <List persons={persons} />
    </div>
  );
};

export default App;
