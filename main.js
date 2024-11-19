import "./style.css";
// import { el } from "./src/El/el.js";
// import { loginPage } from "./src/pages/loginPage.js";
import { loginPage } from "./src/pages/loginPage.js";
// import { Home } from "./src/components/Home.js";

// const button = El({
//   element: "button",
//   children: ["myClick"],
//   eventListener: [
//     {
//       event: "click",
//       callback: () => console.log("button selected"),
//     },
//   ],
// });

// import { createButton } from "./src/components/button";

// const button = createButton("Click me", () => console.log("Button clicked"));
// document.body.appendChild(button);

function renderLoginPage() {
  const appContainer = document.getElementById("app");

  appContainer.innerHTML = "";
  appContainer.appendChild(loginPage());
}
renderLoginPage();
