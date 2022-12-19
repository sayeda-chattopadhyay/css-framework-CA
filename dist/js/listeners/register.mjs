// importing register function

import { register } from "../api/auth/register.mjs";

// addevent listener function

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      // console.log(form);
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log("showing profile:", profile);

      // when we collected the profile data we send it to the Api but we will create the function register(profile)in separate file.( for example- inside apifolder inside auth folder - register.mjs file) and call it here.
      try {
        await register(profile);
      } catch (error) {
        console.log("error:", error);
      }
    });
  }
}

// Note
// here (profile) is the data provided by user while registering.
// function register() is the function which sends the register info(here as profile) to the server with api fetch method post. This function lies inside /api/auth/ folder
// setRegisterFormListener() selected html form(here as #registerForm- line-8), collected form data(here as profile variable- line-16 ) and send the data to API with another function named register() and argument profile.
// We are calling setRegisterFormListener() in the index.mjs file

// another option

// const email = form.email.value;
// const name = form.name.value;
// const password = form.password.value;
// const banner = form.banner.value;
// const avatar = form.avatar.value;

// const profile ={
//     email,
//     name,
//     password,
//     banner,
//     avatar
// }
