import { Link } from "react-router-dom";

import Button from "../Button/Button";
import { formatMileage } from "../../utils/calc";
import {
  HeartEmptyIcon,
  HeartFilledIcon,
} from "../../assets/Icons/Icons";

import css from "./Card.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(prev => !prev);
    if (!isFavorite) {
      toast.success("Added to favorites");
    } else {
      toast.error("Removed from favorites");
    }
  };

  let carAddress = car.address.split(",");

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={car.brand + " " + car.model}
        className={css.img}
      />
      <button
        className={css.favoriteBtn}
        onClick={handleFavoriteClick}
        type="button"
      >
        {isFavorite ? (
          <HeartFilledIcon />
        ) : (
          <HeartEmptyIcon />
        )}
      </button>
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
        to={`/catalog/${car.id}`}
        className={css.link}
      >
        <Button
          wide
          text="Read more"
        />
      </Link>

      <Toaster />
    </div>
  );
};

export default Card;
