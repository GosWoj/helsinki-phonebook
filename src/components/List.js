import React from "react";

const List = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person) => {
        return (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
