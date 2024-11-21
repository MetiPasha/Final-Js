import Navigo from "navigo";
import login from "../pages/loginPage";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import swiper1 from "../pages/swiper1";

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
  });
