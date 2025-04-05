import sprite from "../../images/sprite.svg";

import css from "./Icons.module.css";

export const ArrDownIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-arrow-down"} />
    </svg>
  );
};

export const ArrUpIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-arrow-up"} />
    </svg>
  );
};

export const CalendarIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-calendar"} />
    </svg>
  );
};

export const CarIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-car"} />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-check"} />
    </svg>
  );
};

export const FuelPumpIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-fuel-pump"} />
    </svg>
  );
};

export const GearIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-gear"} />
    </svg>
  );
};

export const HeartIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-heart"} />
    </svg>
  );
};

export const LocationIcon = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-location"} />
    </svg>
  );
};
