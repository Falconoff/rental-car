import axios from "axios";

axios.defaults.baseURL =
  "https://car-rental-api.goit.global";

export const fetchCars = async (page, searchParams) => {
  const { brand, rentalPrice, minMileage, maxMileage } =
    searchParams;
  const { data } = await axios.get(`/cars`, {
    params: {
      ...(page && { page }),
      ...(brand && { brand }),
      ...(rentalPrice && { rentalPrice }),
      ...(minMileage !== undefined && { minMileage }),
      ...(maxMileage !== undefined && { maxMileage }),
    },
  });

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
