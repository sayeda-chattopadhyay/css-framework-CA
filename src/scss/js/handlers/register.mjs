// importing register function

import { register } from "../api/auth/register.mjs";

// addevent listener function

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    // send it to the Api
    register(profile);
  });
}
