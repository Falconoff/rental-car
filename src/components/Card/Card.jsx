import { Link } from "react-router-dom";

import Button from "../Button/Button";
import { formatMileage } from "../../utils/calc";

import css from "./Card.module.css";

const Card = ({ car }) => {
  let carAddress = car.address.split(",");

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={car.brand + " " + car.model}
        className={css.img}
      />
      <div className={css.titleRow}>
        <h3 className={css.title}>
          {car.brand}{" "}
          <span className={css.carModel}>{car.model}</span>,
          {car.year}
        </h3>
        <span>${car.rentalPrice}</span>
      </div>
      <p className={css.info}>
        <span>{carAddress[1]}</span>|
        <span>{carAddress[2]}</span>|
        <span>{car.rentalCompany}</span>|
        <span>{car.type}</span>|
        <span>{formatMileage(car.mileage)} km</span>
      </p>
      <Link
        to={`${car.id}`}
        className={css.link}
      >
        <Button
          wide
          text="Read more"
        />
      </Link>
    </div>
  );
};

export default Card;
