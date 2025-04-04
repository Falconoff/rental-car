import { useId, useState } from "react";
import clsx from "clsx";

import Button from "../Button/Button";
import Select from "../Select/Select";
import NumInput from "../NumInput/NumInput";

import css from "./SearchBar.module.css";

let brandArr = [
  "Audi",
  "BMW",
  "Buick",
  "Hundai",
  "Suzuki",
  "Toyota",
  "Fiat",
  "Mers",
  "Opel",
  "Subaru",
  "Volvo",
];
let priceArr = [10, 20, 30, 40, 50, 60];
let maxMileage = "5700";

const SearchBar = () => {
  // const brandFieldId = useId();
  // const priceFieldId = useId();
  // const mileageFieldId = useId();
  const [carBrand, setCarBrand] = useState("");
  const [price, setPrice] = useState("");
  const [minMileageSelected, setMinMileageSelected] =
    useState("");
  const [maxMileageSelected, setMaxMileageSelected] =
    useState("");

  const handleClickBrand = brand => {
    setCarBrand(brand);
    // setIsOpen(false);
    // console.log("brand: ", brand);
  };

  const handleClickPrice = price => {
    setPrice(price);
    // setIsOpen(false);
    // console.log("price: ", price);
  };

  const handleClickMin = value => {
    setMinMileageSelected(value);
    // setIsOpen(false);
    //  console.log("price: ", price);
  };
  const handleClickMax = value => {
    setMaxMileageSelected(value);
  };

  return (
    <div className={css.searchBar}>
      <Select
        optionsArr={brandArr}
        // choosenOption={ }
        label={"Car brand"}
        placeholder={"Choose a brand"}
        value={carBrand}
        onSelect={handleClickBrand}
      />
      <Select
        optionsArr={priceArr}
        // choosenOption={ }
        label={"Price / 1 hour"}
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
