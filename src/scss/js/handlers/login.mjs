import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);

      // send login form data to the Api throgh this below function login()
      login(profile);
    });
  }
}

// Note
// here (profile) is the data provided by user while loging.
// function login() is the function which sends the login info(here as profile) to the server with api fetch method post. This function lies inside /api/auth/ folder
// setLoginFormListener() selected html form(here as #loginForm- line-4), collected form data(here as profile variable- line-11 ) and send the data to API with another function named login() and argument as profile which is login info.
// We are calling setLoginFormListener() in the index.mjs file
