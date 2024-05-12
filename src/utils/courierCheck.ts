export const coruierCharge = (kg: number) => {
  if (kg <= 200) {
    return 5;
  } else if (200 > kg || kg <= 500) {
    return 10;
  } else if (500 > kg || kg <= 1000) {
    return 15;
  } else {
    return 20;
  }
};
