// export function loginPage1() {
//   const emailInput = El({
//     element: "input",
//     type: "email",
//     placeholder: "Email",
//     className:
//       "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
//   });

//   const passwordInput = El({
//     element: "input",
//     type: "password",
//     placeholder: "Password",
//     className:
//       "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
//   });

//   const rememberCheckbox = El({
//     element: "input",
//     type: "checkbox",
//     className: "form-checkbox text-blue-600",
//   });

//   const rememberLabel = El({
//     element: "label",
//     children: [
//       rememberCheckbox,
//       El({
//         element: "span",
//         children: [" Remember me"],
//         className: "ml-2 text-gray-700",
//       }),
//     ],
//     className: "inline-flex items-center",
//   });

//   const signInButton = El({
//     element: "button",
//     type: "button",
//     children: ["Sign In"],
//     className:
//       "bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
//   });

//   const form = El({
//     element: "form",
//     children: [
//       El({
//         element: "div",
//         children: [
//           El({
//             element: "label",
//             children: ["Email"],
//             className: "block text-gray-700 text-sm font-bold mb-2",
//           }),
//           emailInput,
//         ],
//         className: "mb-4",
//       }),
//       El({
//         element: "div",
//         children: [
//           El({
//             element: "label",
//             children: ["Password"],
//             className: "block text-gray-700 text-sm font-bold mb-2",
//           }),
//           passwordInput,
//         ],
//         className: "mb-6",
//       }),
//       El({
//         element: "div",
//         children: [signInButton, rememberLabel],
//         className: "flex items-center justify-between",
//       }),
//     ],
//     className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
//   });

//   const container = El({
//     element: "div",
//     children: [form],
//     className: "w-full max-w-xs",
//   });

//   return container;
// }
import { El } from "../../el/El";
const login = () => {
  return El({
    element: "div",
    id: "login-page",
    className:
      "w-[414px] h-screen border border-black bg-gray-100 flex flex-col items-center overflow-x-hidden overflow-y-hidden",
    children: [
      El({
        element: "img",
        id: "login-image",
        className: "mt-[132px] h-[81px] w-[54px]",
        src: "../../src/images/logo/logo-black.png",
      }),
      El({
        element: "p",
        className:
          "text-center mt-[118px] font-[700] text-[32px] w-[342px] h-[39px]",
        children: ["Login to Your Account"],
      }),
      El({
        element: "form",
        id: "login-form",
        className:
          "p-4 mt-[48px] w-full flex flex-col items-center justify-center gap-[20px]",
        children: [
          El({
            element: "input",
            type: "email",
            name: "email",
            placeholder: "✉ Email ...",
            id: "login-email",
            className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
          }),
          El({
            element: "input",
            type: "password",
            name: "password",
            placeholder: "🔒 Password ...",
            id: "login-password",
            className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
          }),
          El({
            element: "label",
            className:
              "text-[16px] mt-[19px] w-full flex flex-col justify-center gap-[10px]",
            children: [
              "Remember Me",
              El({
                element: "input",
                type: "checkbox",
                name: "rememberMe",
                id: "remember-me-checkbox",
                className:
                  "border-2 border-gray-600 rounded-sm w-[16px] h-[16px] bg-gray-100 mr-2",
              }),
              El({
                element: "button",
                type: "submit",
                className:
                  "border-none h-[27px] rounded-full bg-black w-[380px] text-white",
                children: "Sign In",
              }),
            ],
          }),
          El({
            element: "p",
            id: "error-message",
            className: "text-red-500 mt-4 text-center hidden",
            children: ["Invalid email or password"],
          }),
        ],
        onsubmit: (event) => {
          loginData(event);
        },
      }),
    ],
  });
};

export default login;
