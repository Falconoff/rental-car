import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

import css from "./NotFoundPage.module.css";
import Button from "../../components/Button/Button";

const NotFoundPage = () => {
  return (
    <Container>
      <h1 className={css.title}>Page Not Found</h1>
      <Link to="/">
        <Button
          text="Go to Home Page"
          wide
        />
      </Link>
    </Container>
  );
};

export default NotFoundPage;
