import { useState } from "react";
import clsx from "clsx";

// import Button from "../Button/Button";
import sprite from "../../images/sprite.svg";

import css from "./Select.module.css";

const ArrDown = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-arrow-down"} />
    </svg>
  );
};

const ArrUp = () => {
  return (
    <svg className={css.icon}>
      <use href={sprite + "#icon-arrow-up"} />
    </svg>
  );
};

const Select = ({
  optionsArr,
  // choosenOption,
  label,
  isPrice,
  placeholder,
}) => {
  const [choosenOption, setChoosenOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

export default Select;
