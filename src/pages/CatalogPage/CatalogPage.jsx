import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

// import allCars from "../../all-cars-response.json";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";

import {
  fetchCars,
  fetchBrands,
  // fetchCarsBySearchParams,
} from "../../api/rentalCarsApi.js";

import css from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import PageWrapper from "../../components/PageWrapper/PageWrapper.jsx";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg.jsx";
import {
  makePricesArray,
  findMaxMileage,
} from "../../utils/calc.js";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";

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
  const [searchParams, setSearchParams] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  // console.log("error: ", error);
  // console.log("searchParams: ", searchParams);
  // console.log("SearchParams: ", searchParams);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  // --- fetch brands ---
  useEffect(() => {
    // console.log("fetch brands");

    async function getBrands() {
      try {
        setLoading(true);
        setError(null);

        const brandsResponse = await fetchBrands();
        setBrands(brandsResponse.data);
      } catch (error) {
        setError(error.message);
        toast.error("Ooops! Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    getBrands();
  }, []);

  // --- fetch cars ---
  useEffect(() => {
    async function fetchRentalCars() {
      try {
        setLoading(true);
        setError(null);

        const carsResponse = await fetchCars(
          page,
          searchParams,
        );

        // throw new Error("Server is down");

        if (carsResponse.cars.length === 0) {
          toast.error("No cars found!");
        }

        if (page !== 1) {
          setCars(prevCars => [
            ...prevCars,
            ...carsResponse.cars,
          ]);
        } else {
          setCars(carsResponse.cars);
        }

        setTotalPages(carsResponse.totalPages);
      } catch (error) {
        setError(error.message);
        toast.error("Ooops! Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    fetchRentalCars();
  }, [page, searchParams]);

  // --- коли отримали масив машин, то заповнюємо масив цін
  // та максимальний пробіг ---
  useEffect(() => {
    if (!Array.isArray(cars) || cars.length === 0) {
      return;
    }
    setPrices(makePricesArray(cars));
    setMaxMileage(findMaxMileage(cars));

    // toast.success("Successfully fetched!");
  }, [cars]);

  const handleSearch = params => {
    setSearchParams(params);
    setPage(1);
    setCars(null);
  };

  return (
    <PageWrapper title="Catalog Page">
      {Array.isArray(brands) && Array.isArray(prices) && (
        <SearchBar
          brands={brands}
          prices={prices}
          maxMileage={maxMileage}
          handleSearch={handleSearch}
        />
      )}

      {error && <ErrorMsg text={error} />}

      {/* {Array.isArray(cars) &&
        cars.length === 0 &&
        toast.error("No cars found!")} */}

      {Array.isArray(cars) && cars.length > 0 && (
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

      <Toaster />
      {loading && <Loader />}

      {totalPages > page && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
    </PageWrapper>
  );
};
export default CatalogPage;
