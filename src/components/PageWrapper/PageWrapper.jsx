import Container from "../Container/Container";

import css from "./PageWrapper.module.css";

const PageWrapper = ({ children, title }) => {
  return (
    <div className={css.mainWrap}>
      <Container>
        <h2 className="visually-hidden">{title}</h2>
        {children}
      </Container>
    </div>
  );
};

export default PageWrapper;
