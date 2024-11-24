import { Url } from "../api/Url";
import { router } from "../routes/router";

export const loginPerson = async (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  try {
    const response = await fetch(`${Url}/users`);
    const users = await response.json();

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      if (router && router.navigate) {
        router.navigate("/home");
      }
    } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.classList.remove("hidden");
    }
  } catch (error) {
    console.error("login error:", error);
  }
};
const autoLogin = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (email && password) {
    fetch(`${Url}/users`)
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          router.navigate("/home");
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
autoLogin();
