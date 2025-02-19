import React from "react";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ display: "flex", columnGap: "10px" }}>
      <ul>
        {pageNumbers.map((number) => (
          <button onClick={() => paginate(number)} key={number}>
            {number}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
