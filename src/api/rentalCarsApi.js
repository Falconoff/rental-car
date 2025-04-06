import axios from "axios";

// const ACCESS_KEY =
//   "yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY";

axios.defaults.baseURL =
  "https://car-rental-api.goit.global/cars/";
// axios.defaults.headers.common["Authorization"] = ACCESS_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 4,
// };

export const fetchAllCars = async () => {
  const { data } = await axios
    .get
    // `?client_id=${ACCESS_KEY}&query=${searchValue}&page=${page}`,
    // `?brand=${brand}&rentalPrice=${rentalPrice}&minMileage=${minMileage}&maxMileage=${maxMileage}&limit=${limit}&page=${page}`,
    ();

  return data;
};

export const fetchCars = async (
  brand,
  rentalPrice,
  page,
  minMileage,
  maxMileage,
  limit,
) => {
  const { data } = await axios.get(
    // `?client_id=${ACCESS_KEY}&query=${searchValue}&page=${page}`,
    `?brand=${brand}&rentalPrice=${rentalPrice}&minMileage=${minMileage}&maxMileage=${maxMileage}&limit=${limit}&page=${page}`,
  );

  return data;
};
