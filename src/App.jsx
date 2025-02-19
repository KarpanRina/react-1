import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setIsLoading] = useState(true);
  const countriesPerPage = 10;

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .finally(setIsLoading(false));
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev === 25 ? prev = 1 : prev + 1);
  // const prevPage = () => setCurrentPage((prev) => prev - 1);
  const prevPage = () => setCurrentPage((prev) => prev === 1 ? prev = 25 : prev - 1);

  return (
    <div className="app">
      <Countries countries={currentCountries} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      <div style={{ textAlign: "center" }}>
        <button onClick={prevPage}>Prev page</button>
        <button onClick={nextPage}>Next page</button>
        <b className="gigi"> Current page: {currentPage}</b>
      </div>
    </div>
  );
}

export default App;
