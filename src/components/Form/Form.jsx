import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Button from "../Button/Button";

import css from "./Form.module.css";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = evt => {
    evt.preventDefault();

    toast.success("Successfully booked!");

    setValues({
      name: "",
      email: "",
      date: "",
      comment: "",
    });
  };

  return (
    <>
      <form
        className={css.form}
        onSubmit={handleSumit}
      >
        <h3 className={css.formTitle}>Book your car now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.inputsWrap}>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Name*"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Email*"
            required
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={values.date}
            placeholder="Booking date"
            required
            onChange={handleChange}
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={values.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button
          text="Send"
          narrow
          type="submit"
        />
      </form>
      <Toaster />
    </>
  );
};

export default Form;
