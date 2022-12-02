// importing register function

import { register } from "../api/auth/register.mjs";

// addevent listener function

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      console.log(form);
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log("showing profile:", profile);

      // when we collected the profile data we send it to the Api but we will create the function register(profile)in separate file.( for example- inside apifolder inside auth folder - register.mjs file) and call it here.
      register(profile);
    });
  }
}

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
