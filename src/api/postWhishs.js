import { Url } from "./Url";
export const AddFavorites = async (id, updatedWishlist) => {
  console.log(
    "Updating wishlist for user id",
    id,
    "with new wishlist",
    updatedWishlist
  );

  const response = await fetch(`${Url}/users/${id}`);
  if (!response.ok) {
    console.error("Error fetching user data");
    throw new Error("Error fetching user data");
  }
  const user = await response.json();

  const updatedUser = {
    ...user,
    wishlist: updatedWishlist,
  };

  const updateResponse = await fetch(`${Url}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });

  if (!updateResponse.ok) {
    console.error("Network error during update");
    throw new Error("Network error during update");
  }

  const updatedUserFromDb = await updateResponse.json();
  return updatedUserFromDb;
};
