// import * as constants from "./api/constant.mjs";

import { setRegisterFormListener } from "./handlers/register.mjs";

// setRegisterFormListener();

import { setLoginFormListener } from "./handlers/login.mjs";

// setLoginFormListener();

const path = location.pathname;

if (path === "/login.html") {
  setLoginFormListener();
}

if (path === "/register.html") {
  setRegisterFormListener();
}
