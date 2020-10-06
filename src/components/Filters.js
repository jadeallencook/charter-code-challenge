import React from 'react';
import states from '../constants/states.json';
import './Filters.css';

export default function Filters({
  query,
  setQuery,
  state,
  setState,
  setPage,
  genre,
  setGenre,
  genres,
}) {
  return (
    <div className="Filters">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
        type="text"
      />
      <select
        value={state}
        id="state"
        onChange={(event) => {
          setState(event.target.value);
          setPage(1);
        }}
      >
        <option value="">ALL STATES</option>
        {states.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        value={genre}
        id="state"
        onChange={(event) => {
          setGenre(event.target.value);
          setPage(1);
        }}
      >
        <option value="">ALL GENRES</option>
        {genres.map((val, index) => (
          <option key={`genre-${index}`} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
