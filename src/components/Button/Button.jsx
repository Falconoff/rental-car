import css from "./Button.module.css";

const Button = ({ children }) => {
  return <div className={css.btn}>{children}</div>;
};

export default Button;
