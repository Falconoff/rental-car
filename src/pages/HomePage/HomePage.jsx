import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

import bgImg from "../../images/hero-img.jpg";

const HomePage = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>
        Find your perfect rental car
      </h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link
        to="/catalog"
        className={css.btn}
      >
        View Catalog
      </Link>
    </div>
  );
};

export default HomePage;
