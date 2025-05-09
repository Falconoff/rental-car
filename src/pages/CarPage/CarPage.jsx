import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  CalendarIcon,
  CheckIcon,
  LocationIcon,
  CarIcon,
  FuelPumpIcon,
  GearIcon,
} from "../../assets/Icons/Icons";
import Loader from "../../components/Loader/Loader";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Form from "../../components/Form/Form";

import { fetchCarById } from "../../api/rentalCarsApi";
import { formatMileage } from "../../utils/calc";

import css from "./CarPage.module.css";

const getAddressArr = data => {
  return data.address.split(",");
};

const CarPage = () => {
  const { carId, setCarId } = useParams();
  const [car, setCar] = useState({});
  const [addressArray, setAddressArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRentalCar() {
      try {
        setLoading(true);
        const data = await fetchCarById(carId);
        setAddressArray(getAddressArr(data));
        setCar(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRentalCar();
  }, []);

  return (
    <PageWrapper title="Car Page">
      {loading && <Loader />}
      {error && <ErrorMsg text={error} />}

      {car.brand && (
        <div className={css.wrapper}>
          <div className={css.leftColumn}>
            <img
              src={car.img}
              alt={car.brand + " " + car.model}
              className={css.carImage}
            />
            <Form />
          </div>

          <div className={css.rightColumn}>
            <div className={css.carMain}>
              <h3 className={css.carName}>
                {car.brand + " " + car.model}, {car.year}
              </h3>
              <span className={css.carId}>Id: 9582</span>
            </div>
            <p className={css.details}>
              <span className={css.location}>
                <LocationIcon />
                {addressArray[1]}, {addressArray[2]}
              </span>
              <span className={css.mileage}>
                Mileage: {formatMileage(car.mileage)} km
              </span>
            </p>
            <p className={css.price}>${car.rentalPrice}</p>
            <p className={css.description}>
              {car.description}
            </p>

            <div className={css.section}>
              <h4 className={css.sectionTitle}>
                Rental Conditions:
              </h4>
              <ul>
                {car.rentalConditions.map(
                  (condition, index) => {
                    return (
                      <li
                        className={css.listItem}
                        key={index}
                      >
                        <CheckIcon /> {condition}
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            <div className={css.section}>
              <h4 className={css.sectionTitle}>
                Car Specifications:
              </h4>
              <ul>
                <li className={css.listItem}>
                  <CalendarIcon /> Year: {car.year}
                </li>
                <li className={css.listItem}>
                  <CarIcon /> Type: {car.type}
                </li>
                <li className={css.listItem}>
                  <FuelPumpIcon /> Fuel Consumption:{" "}
                  {car.fuelConsumption}
                </li>
                <li className={css.listItem}>
                  <GearIcon /> Engine Size: {car.engineSize}
                </li>
              </ul>
            </div>

            <div className={css.section}>
              <h4 className={css.sectionTitle}>
                Accessories and functionalities:
              </h4>
              <ul>
                {car.accessories.map((accessory, index) => {
                  return (
                    <li
                      className={css.listItem}
                      key={index}
                    >
                      <CheckIcon /> {accessory}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default CarPage;
