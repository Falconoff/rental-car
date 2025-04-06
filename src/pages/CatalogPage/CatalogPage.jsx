import { useEffect, useState } from "react";
// import allCars from "../../all-cars-response.json";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";

import { fetchAllCars } from "../../api/rentalCarsApi.js";

import css from "./CatalogPage.module.css";

// console.log("allCars: ", allCars);

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRentalCars() {
      try {
        setLoading(true);
        const data = await fetchAllCars();
        console.log("data: ", data);
        setCars(data.cars);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRentalCars();
  }, []);

  console.log("cars: ", cars);

  return (
    <Container>
      <h2 className="visually-hidden">Catalog Page</h2>

      <SearchBar />

      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>
          Whoops, something went wrong! Please try reloading
          this page!
        </p>
      )}

      {cars.length > 0 && (
        <div className={css.grid}>
          {cars.map(car => (
            <Card
              key={car.id}
              car={car}
            />
          ))}
        </div>
      )}
    </Container>
  );
};
export default CatalogPage;
