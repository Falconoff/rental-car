import { useId, useState } from "react";
import clsx from "clsx";

import Button from "../Button/Button";

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

// const buildDropdownClass = ({ isOpen }) => {
//   return clsx(
//     css.dropdownWrap,
//     isOpen && "visually-hidden2",
//   );
// };

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

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target);
  };

  return (
    <>
      <div className={css.wrapper}>
        <div
          className={css.selectBtn}
          onClick={() => {
            setIsOpen(true);
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
          {/* <div className={buildDropdownClass}> */}
          {/* <div className={css.dropdownList}> */}
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
      </div>

      <br />
      {/*  
      <form onSubmit={handleSubmit}>
        <div>
          <select
            name="carBrand"
            value={carBrand}
            onChange={evt => setCarBrand(evt.target.value)}
            // id=""
          >
            <option value="Buick">Buick</option>
            <option value="Volvo">Volvo</option>
            <option value="Subaru">Subaru</option>
          </select>
        </div>

        <div>
          <select name="rentalPrice">
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>

        <div>
          <select name="mileageMin">
            <option value="0">0</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
          </select>
        </div>

        <div>
          <select name="mileageMax">
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="5000">5000</option>
          </select>
        </div>
        <button type="submit">
          <Button text="Search" />
        </button>
      </form>
      */}
    </>
  );
};

export default SearchBar;
