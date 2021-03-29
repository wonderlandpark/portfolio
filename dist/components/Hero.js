import React from "../../_snowpack/pkg/react.js";
import {FaEnvelope, FaGithub} from "../../_snowpack/pkg/react-icons/fa.js";
import Container from "./Container.js";
const Hero = () => {
  return /* @__PURE__ */ React.createElement(Container, {
    className: "flex items-center justify-center",
    id: "hero",
    ignorePadding: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sea-blue via-hot-pink to-chick-yellow"
  }, "박준서"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl mt-2"
  }, "평범한 학생 풀스택 개발자입니다."), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center text-xl mt-2"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "hover:text-hot-pink px-1",
    href: "mailto:me@wonder.im"
  }, /* @__PURE__ */ React.createElement(FaEnvelope, null)), /* @__PURE__ */ React.createElement("a", {
    className: "hover:text-chick-yellow px-1",
    href: "https://github.com/wonderlandpark",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(FaGithub, null)))));
};
export default Hero;
