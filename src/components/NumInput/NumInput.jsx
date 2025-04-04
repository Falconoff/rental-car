import { useState } from "react";
import clsx from "clsx";

import css from "./NumInput.module.css";

let maxMileage = 6700;

const NumInput = ({
  maxMileage,
  optionsArr,
  // choosenOption,
  label,
  isPrice,
  placeholder,
}) => {
  const [minMileageSelected, setMinMileageSelected] =
    useState(0);
  const [maxMileageSelected, setMaxMileageSelected] =
    useState(0);
  const [isOpenMin, setIsOpenMin] = useState(false);
  const [isOpenMax, setIsOpenMax] = useState(false);

  const handleClick = option => {
    setChoosenOption(option);
    setIsOpen(false);
    console.log("option: ", option);
  };

  return (
    <>
      <div className={css.selectWrapper}>
        <p className={css.label}>{label}</p>
        <button
          className={css.selectBtn}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!choosenOption
            ? placeholder
            : choosenOption && isPrice
            ? "To $" + choosenOption
            : choosenOption}
          {isOpen ? <ArrUp /> : <ArrDown />}
        </button>
        <div
          className={clsx(
            css.dropdownWrap,
            !isOpen && "visually-hidden",
          )}
        >
          <div className={css.dropdownList}>
            {optionsArr.length > 0 ? (
              <ul>
                {optionsArr.map(brand => {
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
              <p>No data</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NumInput;
