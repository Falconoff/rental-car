import clsx from "clsx";

import css from "./Button.module.css";

const Button = ({ text, wide, narrow }) => {
  return (
    <button
      className={clsx(
        css.btn,
        wide && css.wide,
        narrow && css.narrow,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
