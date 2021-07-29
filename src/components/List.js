import React from "react";

const List = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => {
        return (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
