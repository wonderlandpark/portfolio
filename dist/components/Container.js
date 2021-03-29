import React from "../../_snowpack/pkg/react.js";
const Container = ({children, className = "", id, ignorePadding = false}) => {
  return /* @__PURE__ */ React.createElement("div", {
    id,
    "data-anchor": id,
    className: `${className} container mx-auto px-8 min-h-screen ${!ignorePadding && "pt-12"}`
  }, children);
};
export default Container;
