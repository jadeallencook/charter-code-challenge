import React from 'react';
import './Pagination.css';

export default function Pagination({ page, setPage, results }) {
  return (
    <ul className="Pagination">
      <li
        style={page <= 1 ? { opacity: 0.5 } : null}
        onClick={() => setPage(page <= 1 ? 1 : page - 1)}
      >
        Previous
      </li>
      <li>{page}</li>
      <li
        style={Math.ceil(results.length / 10) <= page ? { opacity: 0.5 } : null}
        onClick={() =>
          setPage(Math.ceil(results.length / 10) <= page ? page : page + 1)
        }
      >
        Next
      </li>
    </ul>
  );
}
