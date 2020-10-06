import { useState, useEffect } from 'react';

function useResults() {
  const [results, setResults] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState('');
  const [query, setQuery] = useState('');
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
        Authorization: 'Api-Key q3MNxtfep8Gt',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setRestaurants(res);
      });
  }, []);

  if (!loaded && restaurants.length) {
    setResults(restaurants);
    const mySet = new Set();
    for (let value of restaurants.reduce(
      (array, { genre }) => [...array, ...genre.split(',')],
      []
    )) {
      mySet.add(value);
    }
    setGenres(
      [...mySet].sort((a, b) => {
        a = a.toUpperCase();
        b = b.toUpperCase();
        return a < b ? -1 : a > b ? 1 : 0;
      })
    );
    setLoaded(true);
  }

  useEffect(() => {
    const string = query.toLowerCase();
    setResults(
      restaurants
        .filter(
          (result) =>
            (!state || (state && result.state === state)) &&
            (!genre || (genre && result.genre.indexOf(genre) !== -1)) &&
            (!query ||
              (query && result.name.toLowerCase().indexOf(string) !== -1) ||
              result.genre.toLowerCase().indexOf(string) !== -1 ||
              result.city.toLowerCase().indexOf(string) !== -1)
        )
        .sort((a, b) => {
          a = a.name.toUpperCase();
          b = b.name.toUpperCase();
          return a < b ? -1 : a > b ? 1 : 0;
        })
    );
  }, [state, genre, restaurants, query]);

  return {
    results,
    setRestaurants,
    state,
    setState,
    query,
    setQuery,
    genres,
    genre,
    setGenre,
    loading,
  };
}

export default useResults;
