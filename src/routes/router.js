import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import swiper1 from "../pages/swipers/swiper1";
import swiper2 from "../pages/swipers/swiper2";
import swiper3 from "../pages/swipers/swiper3";
import login from "../pages/login/login";
import home from "../pages/home/home";
import adidas from "../pages/brands/adidas";
import asics from "../pages/brands/asics";
import nike from "../pages/brands/nike";
import converse from "../pages/brands/converse";
import newbalance from "../pages/brands/newbalance";
import puma from "../pages/brands/puma";
import reebok from "../pages/brands/reebok";
import search from "../pages/search";
import productDetail from "../pages/productDetail/productDetail";
import cart from "../pages/cart/cart";
import wishList from "../pages/wishList/wishList";
import checkOut from "../pages/checkout/checkout";
import shippingAddress from "../pages/addressCart/shippingAddress";
import shippingType from "../pages/addressCart/shippingType";
import Payment from "../pages/payment/payment";

export const router = new Navigo("/");
const changePage = (target) => {
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.append(target());
};
const changePage2 = (target, item) => {
  target(item).then((res) => {
    const root = document.getElementById("app");
    root.innerHTML = "";
    root.append(res);
  });
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
  })
  .on("/home", () => {
    changePage2(home);
  })
  .on("/adidas", () => {
    changePage2(adidas);
  })
  .on("/asics", () => {
    changePage2(asics);
  })
  .on("/nike", () => {
    changePage2(nike);
  })
  .on("/converse", () => {
    changePage2(converse);
  })
  .on("/newbalance", () => {
    changePage2(newbalance);
  })
  .on("/puma", () => {
    changePage2(puma);
  })
  .on("/reebok", () => {
    changePage2(reebok);
  })
  .on("/search", () => {
    changePage2(search);
  })
  .on("/productDetail/:id", (item) => {
    changePage2(productDetail, item.data.id);
  })
  .on("/cart", () => {
    changePage2(cart);
  })
  .on("/wishList", () => {
    changePage2(wishList);
  })
  .on("/checkout", () => {
    changePage2(checkOut);
  })
  .on("/shippingAddress", () => {
    changePage2(shippingAddress);
  })
  .on("/shippingType", () => {
    changePage2(shippingType);
  })
  .on("/payment", () => {
    changePage2(Payment);
  });
