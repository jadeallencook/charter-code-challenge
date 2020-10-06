import React, { useState } from 'react';
import './App.css';
import useResults from './hooks/useResults';
import Filters from './components/Filters';
import Table from './components/Table';
import Pagination from './components/Pagination';

function App() {
  const {
    results,
    state,
    setState,
    query,
    setQuery,
    genres,
    genre,
    setGenre,
    loading,
  } = useResults();
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <h1>Charter Code Challenge</h1>
      <Filters
        query={query}
        setQuery={setQuery}
        state={state}
        setState={setState}
        setPage={setPage}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
      />
      {loading ? (
        <h2>Loading Results...</h2>
      ) : (
        <Table results={results} page={page} />
      )}
      <Pagination page={page} setPage={setPage} results={results} />
      <footer>Charter Code Challenge | Developed by @jadeallencook</footer>
    </div>
  );
}

export default App;
