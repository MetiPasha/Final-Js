import { El } from "../../El/el";

const countItemsTow = (item) => {
  return El({
    element: "div",
    className:
      "flex justify-center items-center font-bold bg-gray-100 rounded-full w-8 h-8",
    children: [
      El({
        element: "span",
        children: `${item.quantity}`,
      }),
    ],
  });
};

export default countItemsTow;
