import React from "react";

const Counteries = ({ countries, isLoading }) => {
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <ul>
      {countries.map((el, id) => (
        <li key={id}>
          <b>{el.name.common}</b>
          <img src={el.flags.png} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default Counteries;
