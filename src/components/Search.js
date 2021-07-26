import React from "react";

const Search = ({ search, handleFilter }) => {
  return (
    <div>
      Search by name: <input value={search} onChange={handleFilter} />
    </div>
  );
};

export default Search;
