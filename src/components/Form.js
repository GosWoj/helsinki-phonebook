import React from "react";

const Form = ({
  handleSubmit,
  handleChange,
  handleNumber,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={newName} onChange={handleChange} />
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        Number: <input value={newNumber} onChange={handleNumber} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
