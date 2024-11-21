import { El } from "../El/el";
import { router } from "../routes/router";

const starter = () => {
  setTimeout(() => {
    router.navigate("/welcome");
    // console.log("settimeout");
  }, 3000);
  return El({
    element: "div",
    id: "starter",
    className: "w-screen h-screen flex flex-col justify-between items-center",
    children: [
      El({
        element: "img",
        id: "img-starter",
        className: "mt-[200px]",
        src: "/icons/shoea.png",
      }),
      El({
        element: "img",
        id: "img-starter",
        className: "w-[48px] h-[48px] mb-[180px]",
        src: "/icons/login.gif",
      }),
    ],
  });
};

export default starter;
