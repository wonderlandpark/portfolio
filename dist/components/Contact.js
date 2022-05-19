import React from "../../_snowpack/pkg/react.js";
import Container from "./Container.js";
import Link from "./Link.js";
const Contact = () => {
  return /* @__PURE__ */ React.createElement(Container, {
    id: "contact"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "envelope"
  }, "✉️"), " 연락처"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc mt-10"
  }, /* @__PURE__ */ React.createElement("li", null, "Email: ", /* @__PURE__ */ React.createElement(Link, {
    href: "mailto:me@wonder.im"
  }, "me@wonder.im"), " ", /* @__PURE__ */ React.createElement(Link, {
    href: "wonderlandpark@callisto.team"
  }, "wonderlandpark@callisto.team")), /* @__PURE__ */ React.createElement("li", null, "Github: ", /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/wonderlandpark"
  }, "@wonderlandpark")), /* @__PURE__ */ React.createElement("li", null, "Discord: @wonderlandpark#9999"), /* @__PURE__ */ React.createElement("li", null, "Clubhouse: @wonderlandpark")), /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold pt-10"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "globe"
  }, "🌐"), " 소셜"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc mt-10"
  }, /* @__PURE__ */ React.createElement("li", null, "Blog: ", /* @__PURE__ */ React.createElement(Link, {
    href: "https://blog.wonder.im"
  }, "blog.wonder.im")), /* @__PURE__ */ React.createElement("li", null, "CodersRank: ", /* @__PURE__ */ React.createElement(Link, {
    href: "https://profile.codersrank.io/user/wonderlandpark"
  }, "CodersRank"))));
};
export default Contact;
