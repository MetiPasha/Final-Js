import { Url } from "./Url";

export const wishListCard = async () => {
  try {
    const response = await fetch(`${Url}/users/1`);

    if (!response.ok) {
      throw new Error(`Failed to fetch wishlist. Status: ${response.status}`);
    }

    const user = await response.json();

    if (user && user.wishlist) {
      return user;
    } else {
      throw new Error("Wishlist data is not available.");
    }
  } catch (error) {
    console.error("wishlist Error:", error.message || error);
    return { wishlist: [] };
  }
};

export default wishListCard;
