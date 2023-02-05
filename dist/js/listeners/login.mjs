import { login } from "../api/auth/login.mjs";

/**
 * setLoginFormListener() selects html form, collects form data, and passes it into a async function named login(profile) that sends the data to the API server with post method.
 */

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        await login(profile);
        window.location.replace("/post/index.html");
      } catch (error) {
        console.log("error:", error);
      }
    });
  }
}
