import userData from "../../api/UserData";
import { El } from "../../El/el";
import getOneProduct from "../../api/getOneProduct";
import { reduceCounterShoe } from "../../components/card/reduceCounterShoes";
import increasCounterShoes from "../../components/card/increasCounterShoes";
import { AddFavorites } from "../../api/postWhishs";
import { postproductone } from "../../api/postProductToCard";
import { router } from "../../routes/router";

export const productDetail = async (dataid) => {
  try {
    const data = await getOneProduct(dataid);

    function colorGeneratore(color) {
      switch (color) {
        case "rose":
          return "bg-rose-700";

        case "gray":
          return "bg-gray-700";

        case "emerald":
          return "bg-emerald-700";

        case "teal":
          return "bg-teal-700";

        case "yellow":
          return "bg-yellow-700";

        default:
          break;
      }
    }

    return El({
      element: "div",
      id: "productDetaildiv",
      className:
        "w-[414px] h-[800px] p-1 absolute flex flex-col bg-white  bg-gray-200 overflow-y-hidden",
      children: [
        El({
          element: "button",
          className:
            "flex items-center justify-start p-1 gap-[8px] border-black",
          onclick: () => {
            history.back();
          },
          children: [
            El({
              element: "img",
              className: "w-6 h-4 mt-[18px]",
              src: "../../src/images/icon/back.svg",
            }),
            El({
              element: "p",
              className: "text-2xl mt-[18px]",
              children: ["back"],
            }),
          ],
        }),

        El({
          element: "div",
          className: "w-[414px] h-96 overflow-hidden",
          children: [
            El({
              element: "img",
              className:
                "w-[414px]  h-full object-contain border-b  border-black",
              src: `${data.images}`,
            }),
          ],
        }),

        El({
          element: "div",
          className: "w-[414px] flex flex-col py-6 gap-2",
          children: [
            El({
              element: "div",
              className: "w-[414px] flex justify-between px-6 ",
              children: [
                El({
                  element: "p",
                  className: "text-[32px] font-[700]",
                  children: [`${data.brand}`],
                }),
                El({
                  element: "button",
                  className: "",

                  onclick: async () => {
                    try {
                      const data = await getOneProduct(dataid);
                      console.log("Product data ", data);

                      const user = await userData(1);
                      if (user) {
                        const userObjclone = { ...user };

                        userObjclone.wishlist = userObjclone.wishlist || [];

                        const isInWishlist = userObjclone.wishlist.find(
                          (item) => item.id === data.id
                        );

                        if (!isInWishlist) {
                          const updatedWishlist = [
                            ...userObjclone.wishlist,
                            data,
                          ];

                          const updatedUser = await AddFavorites(
                            1,
                            updatedWishlist
                          );
                          userObjclone.wishlist = updatedUser.wishlist;

                          document
                            .getElementById("likebtn-wishlist")
                            .classList.add("hidden");

                          console.log("Added to wishlist successfully!");
                        } else {
                          console.log("Product is already in wishlist.");
                        }
                      }
                    } catch (error) {
                      console.error("Error while adding to wishlist:", error);
                    }
                  },

                  children: [
                    El({
                      element: "img",
                      id: "likebtn-wishlist",
                      className: "",
                      src: "../../src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),

            El({
              element: "div",
              className: "w-[414px] flex gap-2 px-6 items-center",
              children: [
                El({
                  element: "div",
                  className: "bg-gray-200 p-1 px-2 rounded-md",
                  children: [
                    El({
                      element: "p",
                      className: "",
                      children: ["7.741 sold"],
                    }),
                  ],
                }),
                El({
                  element: "img",
                  className: "w-6",
                  src: "../../src/images/icon/star.svg",
                }),
                El({
                  element: "p",
                  className: "",
                  children: ["4.3 (5,837 rewiews)"],
                }),
              ],
            }),
          ],
        }),

        El({
          element: "div",
          className: "w-[414px] px-6 flex flex-col gap-3 py-10",
          children: [
            El({
              element: "p",
              className: "font-[700] text-[18px]",
              children: ["Description"],
            }),
            El({
              element: "p",
              className: "",
              children: [
                "Discover what it's really like to work at the best sports company in the world; this is adidas through the lens of our people.",
                El({
                  element: "span",
                  className: "font-[700]",
                  children: ["view more.."],
                }),
              ],
            }),

            El({
              element: "div",
              className: "flex gap-32",
              children: [
                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[18px]",
                      children: ["Size"],
                    }),
                    El({
                      element: "div",
                      className: "flex gap-2",
                      children: [
                        ...data.size.map((item) => {
                          return El({
                            element: "button",
                            className: `border border-black w-8 h-8 rounded-full`,
                            children: [`${item}`],
                            onclick: (e) => {
                              let index = e.target;
                              console.log("index", index);
                              let buttons = [...e.target.parentNode.children];
                              console.log(buttons);
                              buttons.map((button) => {
                                if (button === index) {
                                  index.classList.add("bg-black");
                                  index.classList.add("text-white");
                                  index.classList.add("selected-size");
                                } else if (button !== index) {
                                  button.classList.remove("bg-black");
                                  button.classList.remove("text-white");
                                  button.classList.remove("selected-size");
                                }
                              });
                            },
                          });
                        }),
                      ],
                    }),
                  ],
                }),

                El({
                  element: "div",
                  className: "",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[18px]",
                      children: ["Color"],
                    }),
                    El({
                      element: "div",
                      className: "flex gap-2",
                      children: [
                        ...data.color.map((item) => {
                          return El({
                            element: "button",
                            value: item,
                            className: `w-8 h-8 rounded-full ${colorGeneratore(
                              item
                            )}`,
                            onclick: (e) => {
                              let index = e.target;

                              let buttons = [...e.target.parentNode.children];

                              buttons.map((button) => {
                                if (button === index) {
                                  index.classList.add("border-[3px]");
                                  index.classList.add("border-black");
                                  index.classList.add(`selected-color`);
                                } else if (button !== index) {
                                  button.classList.remove("border-[3px]");
                                  button.classList.remove("border-black");
                                  button.classList.remove(`selected-color`);
                                }
                              });
                            },
                          });
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        El({
          element: "div",
          className: "flex w-[414px] gap-4 mt-6 items-center",
          children: [
            El({
              element: "p",
              className: "font-[700] text-[18px]",
              children: ["Quantity"],
            }),
            El({
              element: "div",
              className:
                "bg-gray-200 flex justify-center items-center p-1 w-28 rounded-full gap-4",
              children: [
                El({
                  element: "button",
                  className: "font-[700] text-[26px]",
                  children: [`−`],
                  onclick: () => {
                    reduceCounterShoe(data);
                  },
                }),
                El({
                  element: "p",
                  id: "counterShoe",
                  className: "font-[700] text-[18px]",
                  children: `1`,
                }),
                El({
                  element: "button",
                  className: "font-[700] text-[26px]",
                  children: [`+`],
                  onclick: () => {
                    increasCounterShoes(data);
                  },
                }),
              ],
            }),
          ],
        }),

        El({
          element: "div",
          className: "w-[414px] px-6 flex justify-between py-8",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "p",
                  className: "",
                  children: ["Total Price"],
                }),
                El({
                  element: "p",
                  id: "totalPriceShoe",
                  className: "font-[700] text-[28px]",
                  children: [`$ ${data.price.toFixed(2)}`],
                }),
              ],
            }),

            El({
              element: "button",
              className:
                "bg-black text-white h-16 w-60 flex justify-center items-center rounded-full",
              onclick: async () => {
                try {
                  const res = await userData(1);
                  const clone = res.cart || [];

                  console.log(clone);

                  const counterShoeElement =
                    document.getElementById("counterShoe");
                  const totalPriceShoeElement =
                    document.getElementById("totalPriceShoe");
                  const selectedSizeElement =
                    document.querySelector(".selected-size");
                  const selectedColorElement =
                    document.querySelector(".selected-color");

                  if (
                    !counterShoeElement ||
                    !totalPriceShoeElement ||
                    !selectedSizeElement ||
                    !selectedColorElement
                  ) {
                    throw new Error(
                      "One or more required DOM elements are missing."
                    );
                  }

                  let quantity = Number(
                    counterShoeElement.firstChild.data || 0
                  );
                  let totalPr = Number(
                    totalPriceShoeElement.firstChild.data.substr(2) || 0
                  );
                  let sizeselect = Number(
                    selectedSizeElement.firstChild.data || 0
                  );
                  let selectedcolor = selectedColorElement.value;
                  const previousOrder = clone.find(
                    (item) => item.id === data.id
                  );

                  if (previousOrder) {
                    clone.forEach((item) => {
                      if (item.id === previousOrder.id) {
                        item.quantity += quantity;
                        item.totalPr += totalPr;
                        item.sizeselect = sizeselect;
                        item.colorselect = selectedcolor;
                      }
                    });
                  } else {
                    data.sizeselect = sizeselect;
                    data.colorselect = selectedcolor;
                    data.quantity = quantity;
                    data.totalPr = totalPr;
                    clone.push(data);
                  }

                  await postproductone(1, clone);

                  router.navigate("/home");
                } catch (error) {
                  console.error("Error while processing the cart:", error);
                }
              },

              children: [`Add to Cart`],
            }),
          ],
        }),
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
export default productDetail;
