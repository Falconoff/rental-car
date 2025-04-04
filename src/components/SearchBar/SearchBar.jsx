import { useId, useState } from "react";
import clsx from "clsx";

import Button from "../Button/Button";
import Select from "../Select/Select";

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

const SearchBar = () => {
  // const brandFieldId = useId();
  // const priceFieldId = useId();
  // const mileageFieldId = useId();
  const [carBrand, setCarBrand] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = brand => {
    setCarBrand(brand);
    setIsOpen(false);
    console.log("brand: ", brand);
  };

  return (
    <>
      <p>Search Bar here</p>
      <Select
        optionsArr={brandArr}
        // choosenOption={ }
        label={"Car brand"}
        placeholder={"Choose a brand"}
      />
      <Select
        optionsArr={priceArr}
        // choosenOption={ }
        label={"Price / 1 hour"}
        isPrice
        placeholder={"Choose a price"}
      />
      {/* <div className={css.wrapper}>
        <div
          className={css.selectBtn}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{carBrand || "Choose a brand"}</span>
          <span>{isOpen ? "A" : "V"}</span>
        </div>
        <div
          className={clsx(
            css.dropdownWrap,
            !isOpen && "visually-hidden",
          )}
        >
          <div className={css.dropdownList}>
            {brandArr.length > 0 ? (
              <ul>
                {brandArr.map(brand => {
                  return (
                    <li
                      className={css.dropdownItem}
                      key={brand}
                      onClick={() => handleClick(brand)}
                    >
                      {brand}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No brands</p>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SearchBar;
