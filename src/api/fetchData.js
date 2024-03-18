import { apiUrl } from "../configs/config";

export const fetchData = async () => {
  const data = await fetch(apiUrl);
  const cards = data.json();

  return cards;
};
