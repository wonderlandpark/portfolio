import React from "../../_snowpack/pkg/react.js";
import {FaGithub, FaGlobe} from "../../_snowpack/pkg/react-icons/fa.js";
import Container from "./Container.js";
import Link from "./Link.js";
const Project = () => {
  return /* @__PURE__ */ React.createElement(Container, {
    id: "project"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "books"
  }, "📚"), " 프로젝트"), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-1 lg:grid-cols-3 pt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8 py-6 lg:col-span-3 bg-gradient-to-br from-sea-blue to-blue-600 rounded-2xl transition duration-300 ease-in"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-300"
  }, "REACT.JS TYPESCRIPT TAILWINDCSS"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl lg:text-3xl font-bold"
  }, "한국 디스코드봇 리스트"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-300 text-sm lg:text-md py-1"
  }, "국내 디스코드 봇을 한 곳에서 찾아볼 수 있는 플랫폼입니다."), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/koreanbots/koreanbots",
    className: "pr-1 hover:opacity-80"
  }, /* @__PURE__ */ React.createElement(FaGithub, null)), /* @__PURE__ */ React.createElement(Link, {
    href: "https://koreanbots.dev",
    className: "pr-1 hover:opacity-80"
  }, /* @__PURE__ */ React.createElement(FaGlobe, null))), /* @__PURE__ */ React.createElement("img", {
    loading: "lazy",
    className: "w-full py-3 rounded-2xl",
    src: "/assets/koreanbots-2.png",
    alt: "Koreanbots First"
  }), /* @__PURE__ */ React.createElement("img", {
    loading: "lazy",
    className: "w-full rounded-2xl",
    src: "/assets/koreanbots-3.png",
    alt: "Koreanbots Second"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "px-8 py-6 lg:col-span-3 bg-gradient-to-br from-red-500 to-red-400 rounded-2xl transition duration-300 ease-in"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-300"
  }, "NODE.JS"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl lg:text-3xl font-bold"
  }, "원더봇"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-300 text-sm lg:text-md py-1"
  }, "관리, 도박, 미니게임, 정보 등 다양한 다기능 봇입니다."), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/wonderlandpark/wonderbot",
    className: "pr-1 hover:opacity-80"
  }, /* @__PURE__ */ React.createElement(FaGithub, null)), /* @__PURE__ */ React.createElement(Link, {
    href: "https://wonderbot.xyz",
    className: "pr-1 hover:opacity-80"
  }, /* @__PURE__ */ React.createElement(FaGlobe, null))), /* @__PURE__ */ React.createElement("img", {
    loading: "lazy",
    className: "w-full py-1.5 rounded-2xl",
    src: "/assets/wonderbot-money.png",
    alt: "Wonderbot Money"
  }), /* @__PURE__ */ React.createElement("img", {
    loading: "lazy",
    className: "w-full py-1.5 rounded-2xl",
    src: "/assets/wonderbot-moderation.png",
    alt: "Wonderbot Moderation"
  }), /* @__PURE__ */ React.createElement("img", {
    loading: "lazy",
    className: "w-full py-1.5 rounded-2xl",
    src: "/assets/wonderbot-corona.png",
    alt: "Wonderbot Corona"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/wonderlandpark",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mt-10 text-center bg-github-dark px-6 py-2 rounded-xl"
  }, "Github에서 더보기"))));
};
export default Project;
