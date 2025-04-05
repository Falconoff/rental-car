import { useState } from "react";
import clsx from "clsx";

import {
  makeArrayForMinMileage,
  makeArrayForMaxMileage,
} from "../../utils/calc";

import css from "./NumInput.module.css";

let maxMileage = 6700;

const NumInput = ({
  maxMileage,
  onSelectMin,
  onSelectMax,
  valueFrom,
  valueTo,
  // optionsArr,
  // choosenOption,
  // label,
  // isPrice,
  // placeholder,
}) => {
  // const [minMileageSelected, setMinMileageSelected] =
  //   useState("");
  // const [maxMileageSelected, setMaxMileageSelected] =
  //   useState("");
  const [isOpenMin, setIsOpenMin] = useState(false);
  const [isOpenMax, setIsOpenMax] = useState(false);

  const handleMinClick = option => {
    onSelectMin(option);
    setIsOpenMin(false);
    // console.log("option: ", option);
  };
  const handleMaxClick = option => {
    onSelectMax(option);
    setIsOpenMax(false);
    // console.log("option: ", option);
  };

  const minArr = makeArrayForMinMileage(maxMileage);
  const maxArr = makeArrayForMaxMileage(maxMileage);

  return (
    <div>
      <div className={css.selectWrapper}>
        <p className={css.label}>Car mileage / km</p>
        <button
          className={css.selectMinBtn}
          onClick={() => {
            setIsOpenMin(!isOpenMin);
          }}
        >
          {"From " + valueFrom}
        </button>
        <div
          className={clsx(
            css.dropdownWrap,
            !isOpenMin && "visually-hidden",
          )}
        >
          <div className={css.dropdownList}>
            {minArr.length > 0 ? (
              <ul>
                {minArr.map((value, index) => {
                  return (
                    <li
                      className={css.dropdownItem}
                      key={index}
                      onClick={() => handleMinClick(value)}
                    >
                      {value}
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

      <div className={css.selectWrapper}>
        <button
          className={css.selectMaxBtn}
          onClick={() => {
            setIsOpenMax(!isOpenMax);
          }}
        >
          {"To " + valueTo}
        </button>
        <div
          className={clsx(
            css.dropdownWrap,
            !isOpenMax && "visually-hidden",
          )}
        >
          <div className={css.dropdownList}>
            {maxArr.length > 0 ? (
              <ul>
                {maxArr.map((value, index) => {
                  return (
                    <li
                      className={css.dropdownItem}
                      key={index}
                      onClick={() => handleMaxClick(value)}
                    >
                      {value}
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
    </div>
  );
};

export default NumInput;
