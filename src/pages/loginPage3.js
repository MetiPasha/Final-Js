import { El } from "./El";

export function loginPage3() {
  const emailInput = El({
    element: "input",
    type: "email",
    placeholder: "Email",
    value: "saeed.abdiar@gmail.com",
    className:
      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  });

  const passwordInput = El({
    element: "input",
    type: "password",
    placeholder: "Password",
    value: "password123",
    className:
      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
  });

  const rememberCheckbox = El({
    element: "input",
    type: "checkbox",
    className: "form-checkbox text-blue-600",
  });

  const rememberLabel = El({
    element: "label",
    children: [
      rememberCheckbox,
      El({
        element: "span",
        children: [" Remember me"],
        className: "ml-2 text-gray-700",
      }),
    ],
    className: "inline-flex items-center",
  });

  const signInButton = El({
    element: "button",
    type: "button",
    children: ["Sign In"],
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  });

  const form = El({
    element: "form",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "label",
            children: ["Email"],
            className: "block text-gray-700 text-sm font-bold mb-2",
          }),
          emailInput,
        ],
        className: "mb-4",
      }),
      El({
        element: "div",
        children: [
          El({
            element: "label",
            children: ["Password"],
            className: "block text-gray-700 text-sm font-bold mb-2",
          }),
          passwordInput,
        ],
        className: "mb-6",
      }),
      El({
        element: "div",
        children: [signInButton, rememberLabel],
        className: "flex items-center justify-between",
      }),
    ],
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
  });

  const container = El({
    element: "div",
    children: [form],
    className: "w-full max-w-xs",
  });

  return container;
}
