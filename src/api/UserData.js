import { Url } from "./Url";

export const getDataUser = async (userid) => {
  try {
    const response = await fetch(`${Url}/users/${userid}`);
    if (!response.ok) throw new Error("Response was not ok");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};
export default getDataUser;
