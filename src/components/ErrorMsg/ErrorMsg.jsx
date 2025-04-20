import css from "./ErrorMsg.module.css";

const ErrorMsg = ({ text }) => {
  return (
    <div>
      Whoops, something went wrong!{" "}
      <span className={css.errorText}>{text}...</span>{" "}
      Please try later!
    </div>
  );
};

export default ErrorMsg;
