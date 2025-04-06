import axios from "axios";

// const ACCESS_KEY =
//   "yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY";

axios.defaults.baseURL =
  "https://car-rental-api.goit.global";
// axios.defaults.headers.common["Authorization"] = ACCESS_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 4,
// };

export const fetchAllCars = async () => {
  const { data } = await axios.get(
    // `?client_id=${ACCESS_KEY}&query=${searchValue}&page=${page}`,
    // `?brand=${brand}&rentalPrice=${rentalPrice}&minMileage=${minMileage}&maxMileage=${maxMileage}&limit=${limit}&page=${page}`,
    "/cars",
  );

  return data;
};

export const fetchCarById = async id => {
  const { data } = await axios.get(`/cars/${id}`);

  return data;
};

export const fetchBrands = async () => {
  const data = await axios.get(`/brands`);
  // console.log("data: ", data);

  return data;
};

export const fetchCar = async (
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
