import { Link } from "react-router-dom";

import Button from "../Button/Button";
import img from "../../images/car-image.jpg";

import css from "./Card.module.css";

const Card = ({ car }) => {
  // console.log("car: ", car);
  let carAddress = car.address.split(",");
  // console.log("carAddress: ", carAddress);

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
        <span>{car.mileage} km</span>
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
