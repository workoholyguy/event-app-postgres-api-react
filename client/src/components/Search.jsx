import React from "react";
import "./Search.css";

const Search = ({
  query,
  onQueryChange,
  selectedLocation,
  onLocationChange,
  placeholder = "Search events…",
  locations = [],
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClear = () => {
    onQueryChange("");
  };

  return (
    <form className="search" role="search" onSubmit={handleSubmit}>
      <label htmlFor="event-search">Search events</label>
      <div className="search__group">
        <input
          id="event-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        {query && (
          <button type="button" className="secondary" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>

      <label htmlFor="event-location">Filter by location</label>
      <select
        id="event-location"
        value={selectedLocation}
        onChange={(event) => onLocationChange(event.target.value)}
      >
        <option value="">All locations</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Search;
