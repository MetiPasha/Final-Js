import { El } from "../El/el";
import { router } from "../routes/router";
export const welcome = () => {
  return El({
    element: "div",
    id: "welcome",
    className:
      "bg-red-800 h-screen mx-auto w-[414px] flex flex-col justify-end overflow-y-hidden",
    children: [
      El({
        element: "img",
        id: "welcome-img",
        className: "object-cover",
        src: "/onboarding/WallpaperDog-20534610 1.png",
        onclick: () => {
          router.navigate("/swiper1");
        },
      }),
      El({
        element: "div",
        className: "absolute p-4 flex flex-col   bottom-0 w-[414px] h-[300px]",
        children: [
          El({
            element: "p",
            className: "text-white  text-[40px] mb-[16px]",
            children: ["welcome to 👋"],
          }),
          El({
            element: "p",
            className: "text-white font-semibold text-[72px] mb-[16px]",
            children: ["Shoea"],
          }),
          El({
            element: "p",
            className: "text-white font-semibold text-[16px] mb-[44px]",
            children: [
              "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
            ],
          }),
        ],
      }),
    ],
  });
};

export default welcome;
