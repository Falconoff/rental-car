export const makeArrayForMaxMileage = maxValue => {
  const max = Math.ceil(Number(maxValue) / 1000) * 1000;
  let arr = [];
  let tenthPart = max / 10;
  // console.log("tenthPart: ", tenthPart);
  let acc = 0;
  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.ceil((acc += tenthPart) / 500) * 500);
  }
  // console.log("arr: ", arr);
  return arr;
};

export const makeArrayForMinMileage = maxValue => {
  const max = Math.ceil(Number(maxValue) / 2);
  let arr = [0];
  let tenthPart = max / 6;
  // console.log("tenthPart: ", tenthPart);
  let acc = 0;
  for (let i = 0; i < 6; i += 1) {
    arr.push(Math.ceil((acc += tenthPart) / 500) * 500);
  }
  // console.log("arr: ", arr);
  return arr;
};

export const formatMileage = value => {
  let str = value.toString();
  if (str.length < 4) return str; // Якщо рядок замалий — нічого не змінюємо
  let pos = str.length - 3; // позиція, куди треба вставити пробіл
  return str.slice(0, pos) + " " + str.slice(pos);
};

export const makePricesArray = carsArray => {
  let pricesSet = new Set();
  // зберігаємо тільки унікальні значення ціни
  carsArray.map(car => {
    pricesSet.add(car.rentalPrice);
  });

  let sortedPricesArr = Array.from(pricesSet.keys()).sort(
    (a, b) => {
      return a - b;
    },
  );
  // console.log("sortedPricesArr: ", sortedPricesArr);
  return sortedPricesArr;
};

export const findMaxMileage = carsArray => {
  let maxMileage = 0;
  carsArray.map(car => {
    if (car.mileage > maxMileage) {
      maxMileage = car.mileage;
    }
  });
  return maxMileage;
};
