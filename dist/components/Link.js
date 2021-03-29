import React from "../../_snowpack/pkg/react.js";
const Link = ({href, children}) => {
  return /* @__PURE__ */ React.createElement("a", {
    href,
    className: "text-blue-500 hover:text-blue-400",
    target: !href.startsWith("mailto:") ? "_blank" : void 0,
    rel: "noreferrer"
  }, children);
};
export default Link;
