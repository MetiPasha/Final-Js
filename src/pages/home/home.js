import products from "../../api/products.js";
import { El } from "../../El/el.js";
import { router } from "../../routes/router.js";

// Async function to fetch and render the home component
export const home = async () => {
  try {
    // Fetching product data
    const data = await products();
    // Returning the Home component structure
    return El({
      element: "div", // Main container element
      id: "home", // ID for the container
      className:
        "w-[414px]  h-[82px] mx-auto flex flex-col items-center justify-center overflow-y-hidden scrollbar-hidden",
      children: [
        El({
          element: "nav", // Navigation bar
          id: "top-nav", // ID for the navigation bar
          className:
            "fixed flex w-[414px] h-[80px] top-0 justify-between items-center px-[24px] bg-white z-10",
          children: [
            El({
              element: "div",
              className: "flex gap-[16px]", //Styling for spacing
              children: [
                El({
                  element: "button",
                  id: "",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[48px] h-[48px] rounded-full",
                      src: "./icons/home/userPic.png", //for you
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex flex-col gap-[4px]",
                  children: [
                    El({
                      element: "p",
                      className: "font-[500] text-[16px] text-[#757475]",
                      children: ["Good Morning👋"],
                    }),
                    El({
                      element: "p",
                      className: "font-[700] text-[16px]",
                      children: ["mti pasha"],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-[16px]",
              children: [
                El({
                  element: "button",
                  id: "notification-btn",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./icons/home/bell.svg",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "like-btn",
                  onclick: () => {
                    router.navigate("/wishList");
                  },
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./icons/home/heart.svg",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        // search

        El({
          element: "div",
          id: "search-brand",
          className:
            "p-[24px] fixed -mb-[472px]  w-[414px] bg-white z-10 overflow-y-sroll scrollbar-hidden",
          children: [
            // search input
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "input",
                  type: "text",
                  placeholder: "Search",
                  className:
                    "border-none outline-none h-[37px] bg-gray-200 text-black rounded-full w-[370px] px-8",
                  onkeyup: () => {
                    router.navigate("/search");
                  },
                }),
                El({
                  element: "img",
                  className: "absolute top-[35px] left-[30px]",
                  src: "./icons/home/input-prefix.png",
                }),
              ],
            }),
            // div 1 brand
            El({
              element: "div",
              className: "mt-[20px]",
              // each brand
              children: [
                El({
                  element: "div",
                  className: "flex justify-between",
                  children: [
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",

                          onclick: () => {
                            router.navigate("/nike");
                          },

                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/nike.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Nike"],
                        }),
                      ],
                    }),
                    // end nike

                    El({
                      element: "div",
                      className: "flex flex-col items-center justify-center",
                      children: [
                        El({
                          element: "button",
                          onclick: () => {
                            router.navigate("/adidas");
                          },
                          className:
                            "w-[60px] h-[60px] bg-gray-200 rounded-full flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              src: "./icons/home/adidas.png",
                            }),
                          ],
                        }),

                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Adidas"],
                        }),
                      ],
                    }),
                    // end adidas
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          onclick: () => {
                            router.navigate("/puma");
                          },
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/puma.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Puma"],
                        }),
                      ],
                    }),
                    // end puma
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          onclick: () => {
                            router.navigate("/asics");
                          },
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/asics.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Asics"],
                        }),
                      ],
                    }),

                    // end asics
                  ],
                }),
              ],
            }),
            // div 2 brand
            El({
              element: "div",
              className: "mt-[25px]",
              children: [
                El({
                  element: "div",
                  className: "flex justify-between",
                  children: [
                    El({
                      element: "div",
                      className: "flex flex-col items-center justify-center",
                      children: [
                        El({
                          element: "button",
                          onclick: () => {
                            router.navigate("/reebok");
                          },
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/reebok.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Reebok"],
                        }),
                      ],
                    }),
                    //   end rebook
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          onclick: () => {
                            router.navigate("/newbalance");
                          },
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/newbalance.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["New Ba.."],
                        }),
                      ],
                    }),
                    //   end new balance
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          onclick: () => {
                            router.navigate("/converse");
                          },
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/converse.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["Converse"],
                        }),
                      ],
                    }),
                    //   end convers
                    El({
                      element: "div",
                      className: "flex flex-col justify-center items-center",
                      children: [
                        El({
                          element: "button",
                          className:
                            "w-[60px] h-[60px] rounded-full bg-gray-200 flex justify-center items-center",
                          children: [
                            El({
                              element: "img",
                              className: "",
                              src: "./icons/home/more.png",
                            }),
                          ],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[14px] mt-2",
                          children: ["More.."],
                        }),
                      ],
                    }),
                    //   end more
                  ],
                }),
              ],
            }),

            //   start most popular
            El({
              element: "div",
              className: "mt-[20px] flex justify-between items-center",
              children: [
                El({
                  element: "p",
                  className: "font-[600] text-[20px]",
                  children: ["Most Popular"],
                }),
                El({
                  element: "button",
                  className: "font-[600] text-[16px]",
                  children: ["See All"],
                }),
              ],
            }),
            // popular button
            El({
              element: "div",
              className:
                "flex mt-[20px] gap-[12px] overflow-x-scroll scrollbar-hidden",
              onclick: (e) => {
                let index = e.target;
                console.log(index);
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
              children: [
                El({
                  element: "button",
                  className:
                    "h-[39px] py-[10px] px-[20px] text-gray-700 border-2 border-gray-700  rounded-full flex justify-center items-center",
                  children: ["All"],
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["Nike"],
                  onclick: () => {
                    router.navigate("/nike");
                  },
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["Adidias"],
                  onclick: () => {
                    router.navigate("/adidas");
                  },
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["Puma"],
                  onclick: () => {
                    router.navigate("/puma");
                  },
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["Asics"],
                  onclick: () => {
                    router.navigate("/asics");
                  },
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["Reebok"],
                  onclick: () => {
                    router.navigate("/reebok");
                  },
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px]  text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["NewBalance"],
                  onclick: () => {
                    router.navigate("/newbalance");
                  },
                }),
                El({
                  element: "button",
                  className:
                    "h-[39px] px-[20px] text-gray-700 border-2 border-gray-700 rounded-full flex justify-center items-center",
                  children: ["Converse"],
                  onclick: () => {
                    router.navigate("/converse");
                  },
                }),
              ],
            }),
          ],
        }),

        //products
        El({
          element: "div",
          id: "products-home",
          className:
            "p-[14px] bg-gray-400 absolute w-[414px] top-[480px] flex flex-wrap justify-center gap-4 overflow-y-scroll no-scrollbar ",
          children: data.map((item) => {
            return El({
              element: "div",
              id: `${item.id}`,
              onclick: () => {
                //  router.navigate("/productDetail")
                router.navigate(`/productDetail/${item.id}`);
                // productDetail({ id: item.id });
                // Router().navigate(`/product/${item.id}`);
                // router.navigate(`/product/${item.id}`)
              },
              className: "",
              children: [
                El({
                  element: "div",
                  className:
                    "w-[182px] h-[182px] bg-gray-100 shadow-lg rounded-2xl",
                  children: [
                    El({
                      element: "img",
                      className: "rounded-2xl w-full h-full",
                      src: `${item.images}`,
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "mt-3",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[20px]",
                      children: [`${item.title}`],
                    }),
                    El({
                      element: "p",
                      className: "font-[600] text-[16px]",
                      children: [`$ ${item.price}`],
                    }),
                  ],
                }),
              ],
            });
          }),
        }),

        //   footer

        El({
          element: "nav",
          id: "bottom-nav",
          className:
            "fixed flex w-[414px] h-[66px] bottom-0 justify-between px-[48px] bg-white z-10",
          children: [
            El({
              element: "button",
              id: "home-btn",
              className: " flex flex-col justify-center items-center",
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./icons/home/Home.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Home",
                }),
              ],
            }),
            El({
              element: "button",
              id: "cart-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                router.navigate("/cart");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./icons/home/Cart.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Cart",
                }),
              ],
            }),
            El({
              element: "button",
              id: "orders-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                router.navigate("/orders");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./icons/home/Orders.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Orders",
                }),
              ],
            }),
            El({
              element: "button",
              id: "Wallet-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                router.navigate("/wallet");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./icons/home/Wallet.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Wallet",
                }),
              ],
            }),
            El({
              element: "button",
              id: "profile-btn",
              className: " flex flex-col justify-center items-center",
              onclick: () => {
                router.navigate("/profile");
              },
              children: [
                El({
                  element: "img",
                  className: "w-[24px] h-[24px]",
                  src: "./icons/home/Profile.png",
                }),
                El({
                  element: "p",
                  className: "text-[10px] font-[600]",
                  children: "Profile",
                }),
              ],
            }),
          ],
        }),

        //   ----end
      ],
    });
    // Handling potential errors
  } catch (error) {
    console.log(error);
  }
};
export default home;
