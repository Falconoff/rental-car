import { useState } from "react";
import clsx from "clsx";

// import Button from "../Button/Button";
// import sprite from "../../images/sprite.svg";
// import * as icons from "../../utils/icons.jsx";

import css from "./Select.module.css";
import {
  ArrDownIcon,
  ArrUpIcon,
} from "../../assets/Icons/Icons.jsx";
// import {
//   makeArrayForMinMileage,
//   makeArrayForMaxMileage,
// } from "../../utils/calc";

let maxMileage = "5700";
// let res = null;
// res = Math.ceil(Number(maxMileage) / 1000) * 1000;

// console.log(
//   "res MIN: ",
//   makeArrayForMinMileage(maxMileage),
// );
// console.log(
//   "res MAX: ",
//   makeArrayForMaxMileage(maxMileage),
// );

// const ArrDown = () => {
//   return (
//     <svg className={css.icon}>
//       <use href={sprite + "#icon-arrow-down"} />
//     </svg>
//   );
// };

// const ArrUp = () => {
//   return (
//     <svg className={css.icon}>
//       <use href={sprite + "#icon-arrow-up"} />
//     </svg>
//   );
// };

const Select = ({
  optionsArr,
  // choosenOption,
  labelText,
  isPrice,
  placeholder,
  value,
  onSelect,
}) => {
  // const [choosenOption, setChoosenOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = option => {
    // setChoosenOption(option);
    onSelect(option);
    setIsOpen(false);
    // console.log("option: ", option);
  };

  return (
    <>
      <div className={css.selectWrapper}>
        <p className={css.label}>{labelText}</p>
        <button
          className={css.selectBtn}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!value
            ? placeholder
            : value && isPrice
            ? "To $" + value
            : value}
          {isOpen ? <ArrUpIcon /> : <ArrDownIcon />}
        </button>
        <div
          className={clsx(
            css.dropdownWrap,
            !isOpen && "visually-hidden",
          )}
        >
          <div className={css.dropdownList}>
            {Array.isArray(optionsArr) ? (
              <ul>
                {optionsArr.map(option => {
                  return (
                    <li
                      className={css.dropdownItem}
                      key={option}
                      onClick={() => handleClick(option)}
                    >
                      {option}
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

export default Select;
