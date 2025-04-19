import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// import allCars from "../../all-cars-response.json";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";

import {
  fetchAllCars,
  fetchBrands,
} from "../../api/rentalCarsApi.js";

import css from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import PageWrapper from "../../components/PageWrapper/PageWrapper.jsx";

// console.log("allCars: ", allCars);

const CatalogPage = () => {
  const [cars, setCars] = useState(null);
  // console.log("cars: ", cars);
  const [brands, setBrands] = useState(null);
  // console.log("brands: ", brands);
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams: ", searchParams);

  useEffect(() => {
    setSearchParams("brand");
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
    if (!Array.isArray(cars)) {
      return;
    }

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
    <PageWrapper title="Catalog Page">
      {/* <div className={css.mainWrap}>
        <h2 className="visually-hidden">Catalog Page</h2> */}

      {Array.isArray(brands) && Array.isArray(prices) && (
        <SearchBar
          brands={brands}
          prices={prices}
        />
      )}

      {loading && <Loader />}
      {error && (
        <p>
          Whoops, something went wrong! Please try reloading
          this page!
        </p>
      )}

      {Array.isArray(cars) && (
        <ul className={css.grid}>
          {cars.map(car => (
            <li
              key={car.id}
              className={css.listItem}
            >
              <Card car={car} />
            </li>
          ))}
        </ul>
      )}
      {/* </div> */}
    </PageWrapper>
  );
};
export default CatalogPage;
