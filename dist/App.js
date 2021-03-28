import React, {useEffect} from "../_snowpack/pkg/react.js";
import Pageable from "../_snowpack/pkg/pageable.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Stack from "./components/Stack.js";
const App = () => {
  useEffect(() => {
    new Pageable("#container", {
      animation: 500,
      swipeThreshold: 200
    });
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    id: "container",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {scrollSnapType: "y mandatory", overflowY: "scroll"}
  }, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(Stack, null)));
};
export default App;
