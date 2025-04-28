import axios from "axios";

const carsInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
  params: {
    limit: 6,
  },
});

export const fetchCars = async (page, searchParams) => {
  const { brand, rentalPrice, minMileage, maxMileage } =
    searchParams;
  const { data } = await carsInstance.get(`/cars`, {
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
  const { data } = await carsInstance.get(`/cars/${id}`);

  return data;
};

export const fetchBrands = async () => {
  const data = await carsInstance.get(`/brands`);
  // console.log("data: ", data);

  return data;
};
