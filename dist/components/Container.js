import React from "../../_snowpack/pkg/react.js";
const Container = ({children, className = "", id}) => {
  return /* @__PURE__ */ React.createElement("div", {
    id,
    "data-anchor": id,
    className: `${className} container mx-auto px-4 py-12`
  }, children);
};
export default Container;
