export const getSale = (normalPrice, salePrice) => {
  return Math.round(((normalPrice - salePrice) / normalPrice) * 10) * 10;
};
