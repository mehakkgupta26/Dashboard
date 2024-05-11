export const getOrder = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventoryy = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
