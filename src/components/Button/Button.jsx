import clsx from "clsx";

import css from "./Button.module.css";

const Button = ({
  text,
  wide,
  narrow,
  type = "button",
}) => {
  return (
    <button
      className={clsx(
        css.btn,
        wide && css.wide,
        narrow && css.narrow,
      )}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
