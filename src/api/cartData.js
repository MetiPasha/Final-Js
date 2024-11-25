import { Url } from "./Url";

export const cartData = async () => {
  const response = await fetch(`${Url}/users/1`);
  const data = await response.json();
  return data;
};
