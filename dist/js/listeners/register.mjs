// importing register function

import { register } from "../api/auth/register.mjs";

/**
 * This setRegisterFormListener function selects html form (registerForm).
 * adds addEventListener to the form.
 * Collects form data that users provide while registering ( as profile variable).
 * Sends the data to the Api through register() function. This function is inside js-> Api->auth -> register.mjs .
 * We are calling setRegisterFormListener() in the index.mjs file
 *
 */

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        await register(profile);
      } catch (error) {
        console.log("error:", error);
      }
    });
  }
}
