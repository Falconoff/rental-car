import { CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  textAlign: "center",
  // borderColor: "red",
};

const Loader = () => {
  return (
    <PulseLoader
      color={"#3470ff"}
      // loading={loading}
      cssOverride={override}
      size={10}
      aria-label="Loading Spinner"
      margin={5}
      // data-testid="loader"
    />
  );
};

export default Loader;
