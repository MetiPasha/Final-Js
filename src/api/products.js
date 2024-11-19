import { Url } from "./Url";

export const products = async () => {
  try {
    const response = await fetch(`${Url}/Products`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default products;
