import * as React from "react";
import * as ReactDOM from "react-dom";

import "es6-promise/auto";
import "typeface-roboto";

import "./style.css";

import Root from "./root";

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.render(<Root />, rootEl);
}
