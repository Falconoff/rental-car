import css from "./Button.module.css";

const Button = ({ text }) => {
  return <div className={css.btn}>{text}</div>;
};

export default Button;
