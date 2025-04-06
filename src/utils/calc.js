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
