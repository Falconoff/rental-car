import clsx from "clsx";

import css from "./Button.module.css";

const Button = ({
  text,
  wide,
  narrow,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={clsx(
        css.btn,
        wide && css.wide,
        narrow && css.narrow,
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
