import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import List from "./components/List";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => {
        console.log(error);
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
      // window.alert(`${newName} already exists!`);
      if (
        window.confirm(
          `${newName} already exists. Replace old number with a new one?`
        )
      ) {
        personService
          .updateNumber(samePerson.id, person)
          .then((result) => {
            setPersons(
              persons.map((p) => (p.id !== samePerson.id ? p : result))
            );
            setNewName("");
            setNewNumber("");
            setErrorMessage(`Changed number for ${samePerson.name}`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      personService
        .create(person)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setErrorMessage(`Added ${returnedPerson.name}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
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

  const handleDelete = (person) => {
    if (window.confirm(`Do you want to delete ${person.name}?`)) {
      personService.deletePerson(person.id).then((result) => {
        setPersons(persons.filter((p) => p.id !== person.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
      <List persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
