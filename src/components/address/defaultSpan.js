import { El } from "../../El/el";

const defaultSpan = () => {
  return El({
    element: "div",
    children: "Default",
    className: "text-xs bg-slate-200 self-center p-1 rounded",
  });
};

export default defaultSpan;
