import Navigo from "navigo";
import login from "../pages/login";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import swiper1 from "../pages/swiper1";
import swiper2 from "../pages/swiper2";
import swiper3 from "../pages/swiper3";
export const router = new Navigo("/");
const changePage = (target) => {
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.append(target());
};

router
  .on("/", () => {
    changePage(starter);
  })
  .on("/welcome", () => {
    changePage(welcome);
  })
  .on("/swiper1", () => {
    changePage(swiper1);
  })
  .on("/swiper2", () => {
    changePage(swiper2);
  })
  .on("/swiper3", () => {
    changePage(swiper3);
  })
  .on("/login", () => {
    changePage(login);
  });
