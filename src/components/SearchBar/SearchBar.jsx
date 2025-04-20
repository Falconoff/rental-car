import { useId, useState } from "react";
import clsx from "clsx";

import Button from "../Button/Button";
import Select from "../Select/Select";
import NumInput from "../NumInput/NumInput";

import css from "./SearchBar.module.css";

// let brandArr = [
//   "Audi",
//   "BMW",
//   "Buick",
//   "Hundai",
//   "Suzuki",
//   "Toyota",
//   "Fiat",
//   "Mers",
//   "Opel",
//   "Subaru",
//   "Volvo",
// ];
// let priceArr = [10, 20, 30, 40, 50, 60];
// let maxMileage = "5700";

const SearchBar = ({ brands, prices, maxMileage }) => {
  const [carBrand, setCarBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [minMileageSelected, setMinMileageSelected] =
    useState("");
  const [maxMileageSelected, setMaxMileageSelected] =
    useState("");

  console.log("carBrand: ", carBrand);
  console.log("price: ", price);
  console.log("minMileageSelected: ", minMileageSelected);
  console.log("maxMileageSelected: ", maxMileageSelected);

  const handleClickBrand = brand => {
    setCarBrand(brand);
  };

  const handleClickPrice = price => {
    setPrice(price);
  };

  const handleClickMin = value => {
    setMinMileageSelected(value);
  };
  const handleClickMax = value => {
    setMaxMileageSelected(value);
  };

  return (
    <div className={css.searchBar}>
      <Select
        optionsArr={brands}
        labelText={"Car brand"}
        placeholder={"Choose a brand"}
        value={carBrand}
        onSelect={handleClickBrand}
      />
      <Select
        optionsArr={prices}
        labelText={"Price / 1 hour"}
        isPrice
        placeholder={"Choose a price"}
        value={price}
        onSelect={handleClickPrice}
      />

      <NumInput
        maxMileage={maxMileage}
        onSelectMin={handleClickMin}
        onSelectMax={handleClickMax}
        valueFrom={minMileageSelected}
        valueTo={maxMileageSelected}
      />

      <Button
        text="Search"
        narrow
      />
    </div>
  );
};

export default SearchBar;
