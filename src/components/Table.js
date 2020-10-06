import React from 'react';
import './Table.css';

export default function Table({ results, page }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Telephone</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {!results.length ? (
          <tr>
            <td className="no-results" colSpan="5">
              No Results
            </td>
          </tr>
        ) : (
          results.map(({ id, name, city, state, telephone, genre }, index) => {
            return (
              <tr
                key={id}
                hidden={index >= page * 10 || index <= page * 10 - 11}
              >
                <td>{name}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{telephone}</td>
                <td>{genre}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
