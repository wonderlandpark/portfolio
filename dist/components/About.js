import React from "../../_snowpack/pkg/react.js";
import GitHubCalendar from "../../_snowpack/pkg/react-github-calendar.js";
import Container from "./Container.js";
const About = () => {
  return /* @__PURE__ */ React.createElement(Container, {
    id: "about"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold"
  }, "안녕하세요 ", /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "wave"
  }, "👋")), /* @__PURE__ */ React.createElement("p", {
    className: "pt-6 pb-2"
  }, "안녕하세요! 자바스크립트를 주로 사용하며, 백앤드, 프론트앤드, DB 등을 유연하게 다룰 수 있습니다.", /* @__PURE__ */ React.createElement("br", null), "주로 프론트앤드 개발을 즐겨하며, 디스코드 챗봇, Restful API 등을 개발합니다."), /* @__PURE__ */ React.createElement("p", null, "머신러닝과 빅데이터에 관심이 많고, CTF에 참가하는 것도 즐깁니다."), /* @__PURE__ */ React.createElement("p", null, "최대한 ", /* @__PURE__ */ React.createElement("strong", null, "1일 1커밋"), "을 실천하도록 노력하고 있습니다."), /* @__PURE__ */ React.createElement("div", {
    className: "py-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold mb-2"
  }, "Github Contribution Graph"), /* @__PURE__ */ React.createElement(GitHubCalendar, {
    username: "wonderlandpark",
    years: [2021],
    theme: {
      background: "transparent",
      text: "#fff",
      grade4: "#27d545",
      grade3: "#10983d",
      grade2: "#00602d",
      grade1: "#003820",
      grade0: "#2d333b"
    }
  })));
};
export default About;
