import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

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
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg.jsx";
import {
  makePricesArray,
  findMaxMileage,
} from "../../utils/calc.js";

// console.log("allCars: ", allCars);

const CatalogPage = () => {
  const [cars, setCars] = useState(null);
  // console.log("cars: ", cars);
  const [brands, setBrands] = useState(null);
  // console.log("brands: ", brands);
  const [prices, setPrices] = useState(null);
  const [maxMileage, setMaxMileage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterSearchParams, setFilterSearchParams] =
    useState({});
  // console.log("error: ", error);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams: ", searchParams);
  console.log("filterSearchParams: ", filterSearchParams);

  useEffect(() => {
    // setSearchParams("brand");
    async function fetchRentalCars() {
      try {
        setLoading(true);
        const carsResponse = await fetchAllCars();
        const brandsResponse = await fetchBrands();

        // throw new Error("Server is down");

        setCars(carsResponse.cars);
        setBrands(brandsResponse.data);
        // setPrices(makePricesArray(cars));
      } catch (error) {
        setError(error.message);
        toast.error("Ooops! Something went wrong!");
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
    setPrices(makePricesArray(cars));
    setMaxMileage(findMaxMileage(cars));
    // console.log("maxMileage: ", maxMileage);
    // console.log("prices: ", prices);
    toast.success("Successfully fetched!");
  }, [cars]);

  const handleSearch = params => {
    setFilterSearchParams(params);
  };

  return (
    <PageWrapper title="Catalog Page">
      {/* <Toaster /> */}
      {/* <div className={css.mainWrap}>
        <h2 className="visually-hidden">Catalog Page</h2> */}

      {Array.isArray(brands) && Array.isArray(prices) && (
        <SearchBar
          brands={brands}
          prices={prices}
          maxMileage={maxMileage}
          // onSelectBrand={handleClickBrand}
          // onSelectPrice={handleClickPrice}
          // onSelectMin={handleClickMin}
          // onSelectMax={handleClickMax}
          // valueFrom={minMileageSelected}
          // valueTo={maxMileageSelected}
          handleSearch={handleSearch}
        />
      )}

      {loading && <Loader />}
      {error && <ErrorMsg text={error} />}

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
      <Toaster />
    </PageWrapper>
  );
};
export default CatalogPage;
