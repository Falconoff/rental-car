import { useId, useState } from "react";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

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

const SearchBar = ({
  brands,
  prices,
  maxMileage,
  handleSearch,
}) => {
  const [carBrandSelected, setCarBrandSelected] =
    useState(null);
  const [priceSelected, setPriceSelected] = useState(null);
  const [minMileageSelected, setMinMileageSelected] =
    useState(null);
  const [maxMileageSelected, setMaxMileageSelected] =
    useState(null);

  // console.log("carBrandSelected: ", carBrandSelected);
  // console.log("priceSelected: ", priceSelected);
  // console.log("minMileageSelected: ", minMileageSelected);
  // console.log("maxMileageSelected: ", maxMileageSelected);

  const handleClickBrand = brand => {
    setCarBrandSelected(brand);
  };

  const handleClickPrice = price => {
    setPriceSelected(price);
  };

  const handleClickMin = value => {
    setMinMileageSelected(value);
  };
  const handleClickMax = value => {
    setMaxMileageSelected(value);
  };

  const onSearch = () => {
    // console.log("onSearch clicked!");

    if (minMileageSelected > maxMileageSelected) {
      toast.error(
        "FROM mileage should be less than TO mileage!",
      );
      return;
    }

    handleSearch({
      brand: carBrandSelected,
      rentalPrice: priceSelected,
      minMileage: minMileageSelected,
      maxMileage: maxMileageSelected,
    });
  };

  const onReset = () => {
    setCarBrandSelected(null);
    setPriceSelected(null);
    setMinMileageSelected("");
    setMaxMileageSelected("");
    handleSearch({});
  };

  return (
    <div className={css.searchBar}>
      <Toaster />

      <Select
        optionsArr={brands}
        labelText={"Car brand"}
        placeholder={"Choose a brand"}
        value={carBrandSelected}
        onSelect={handleClickBrand}
      />
      <Select
        optionsArr={prices}
        labelText={"Price / 1 hour"}
        isPrice
        placeholder={"Choose a price"}
        value={priceSelected}
        onSelect={handleClickPrice}
      />

      <NumInput
        maxMileage={maxMileage}
        onSelectMin={handleClickMin}
        onSelectMax={handleClickMax}
        valueFrom={
          minMileageSelected !== null
            ? minMileageSelected
            : ""
        }
        valueTo={
          maxMileageSelected !== null
            ? maxMileageSelected
            : ""
        }
      />

      <Button
        text="Search"
        narrow
        onClick={onSearch}
      />

      <Button
        text="Reset"
        narrow
        onClick={onReset}
      />
    </div>
  );
};

export default SearchBar;
