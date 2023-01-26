import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchField, setSearchField] = useState("");

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type here to search."
        onChange={handleSearchChange}
        value={searchField}
      />
    </div>
  );
}

export default Search;
