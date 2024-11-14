import "./style.css";
// import { el } from "./src/El/el.js";
import { loginPage1 } from "./src/pages/loginPage1.js";
// import { loginPage2 } from "./src/pages/loginPage2.js";
// import { loginPage3 } from "./src/pages/loginPage3.js";

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

function renderLoginPage(pageNumber) {
  const appContainer = document.getElementById("app");

  appContainer.innerHTML = "";

  if (pageNumber === 1) {
    appContainer.appendChild(loginPage1());
  } else if (pageNumber === 2) {
    appContainer.appendChild(loginPage2());
  } else if (pageNumber === 3) {
    appContainer.appendChild(loginPage3());
  }
}
renderLoginPage(1);
