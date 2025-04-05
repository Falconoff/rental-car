import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    comment: "",
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = ([selectedDate]) => {
    setFormData(prev => ({
      ...prev,
      date: selectedDate,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Тут можна відправити форму кудись або показати підтвердження
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.form}
    >
      <h2>Book your car now</h2>
      <p>
        Stay connected! We are always ready to help you.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Name*"
        required
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email*"
        required
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />

      <Flatpickr
        value={formData.date}
        onChange={handleDateChange}
        options={{ dateFormat: "Y-m-d" }}
        placeholder="Booking date"
        style={styles.input}
      />

      <textarea
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={handleChange}
        style={styles.textarea}
      />

      <button
        type="submit"
        style={styles.button}
      >
        Send
      </button>
    </form>
  );
};

// Стилі — можна замінити Tailwind, MUI, або styled-components
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "16px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    minHeight: "80px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default BookingForm;
