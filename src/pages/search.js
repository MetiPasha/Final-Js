import products from "../api/products";
import { Url } from "../api/Url";
import { El } from "../El/el";
import { router } from "../routes/router";
// Define the search function
const search = async () => {
  const data = await products();
  try {
    return El({
      element: "div",
      id: "Search",
      className: "w-[414px] h-screen mx-auto flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "div",
          className: "flex items-center gap-3",
          children: [
            El({
              element: "button",
              className: "flex absolute z-30 top-[48px]",
              onclick: () => {
                history.back();
              },
              children: [
                El({
                  element: "img",
                  className: "text-2xl",
                  src: "./icons/back.svg",
                }),
              ],
            }),
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "input",
                  id: "searchi",
                  onkeyup: (e) => {
                    document
                      .getElementById("not-search")
                      //Add the 'hidden' class to the search list
                      .classList.add("hidden");
                    // Select the DOM element for the search box
                    const search = document.getElementById("products-search");
                    // Clear any previous search results
                    search.innerHTML = "";

                    fetch(`${Url}/Products?q=${e.target.value}`)
                      .then((res) => res.json())
                      .then((data) => {
                        search.innerHTML = "";
                        // Iterate through the list of products returned from the API
                        data.map((item) => {
                          search.appendChild(
                            El({
                              element: "div",
                              id: `${item.id}`,
                              onclick: () => {
                                router.navigate(`/productDetail/${item.id}`);
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
                                      className: "rounded-2xl w-[414px] h-full",
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
                            })
                          );
                        });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  },

                  className:
                    "w-[350px] h-[45px] bg-gray-100 border-none rounded-md px-10 absolute z-10 left-[45px]",
                  type: "text",
                  placeholder: "Search",
                }),
                El({
                  element: "img",
                  className:
                    "absolute z-20 w-[414px] h-[18px] top-[45px] left-[-150px]",
                  src: "./icons/home/input-prefix.png",
                }),
                El({
                  element: "div",
                  id: "products-search",
                  className:
                    "p-[24px] absolute w-[414px] top-[80px] flex flex-wrap justify-center gap-4 overflow-y-scroll no-scrollbar ",
                  children: [],
                }),
                El({
                  element: "div",
                  className:
                    "w-[414px] flex flex-col h-full justify-center items-center",
                  id: "not-search",
                  children: [
                    El({
                      element: "img",
                      className: "",
                      src: "./icons/pages.png",
                    }),
                    El({
                      element: "p",
                      className: "font-[600] text-[24px]",
                      children: ["Not Found"],
                    }),
                    El({
                      element: "p",
                      className: "font-[400] text-[16px] text-center p-8",
                      children: [
                        "Sorry,the keyword you enterd cannot be found.please check again or search with another keyword.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
export default search;
