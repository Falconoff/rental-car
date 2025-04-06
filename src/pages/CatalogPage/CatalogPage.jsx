import { useEffect, useState } from "react";
// import allCars from "../../all-cars-response.json";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";

import {
  fetchAllCars,
  fetchBrands,
} from "../../api/rentalCarsApi.js";

import css from "./CatalogPage.module.css";

// console.log("allCars: ", allCars);

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  // console.log("cars: ", cars);
  const [brands, setBrands] = useState([]);
  console.log("brands: ", brands);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRentalCars() {
      try {
        setLoading(true);
        const carsResponse = await fetchAllCars();
        const brandsResponse = await fetchBrands();

        setCars(carsResponse.cars);
        setBrands(brandsResponse.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRentalCars();
  }, []);

  useEffect(() => {
    let pricesSet = new Set();
    cars.map(car => {
      pricesSet.add(car.rentalPrice);
    });
    let sortedPricesArr = Array.from(pricesSet.keys()).sort(
      (a, b) => {
        return a - b;
      },
    );
    setPrices(sortedPricesArr);
  }, [cars]);

  return (
    <Container>
      <h2 className="visually-hidden">Catalog Page</h2>

      <SearchBar
        brands={brands}
        prices={prices}
      />

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
