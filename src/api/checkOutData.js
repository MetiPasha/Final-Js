import { Url } from "./Url";

export const checkOutData = async () => {
  const res = await fetch(`${Url}/users/1`);
  const data = await res.json();
  return data;
};
