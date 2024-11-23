import { Url } from "./Url";

export const userData = async (userid) => {
  try {
    const response = await fetch(`${Url}/users/${userid}`);
    if (!response.ok) throw new Error("there was a problem with response");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};
export default userData;
