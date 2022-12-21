import { updateProfile } from "../api/profile/profileDetails/update.mjs";

/**
 * This functions retrieves users updated profile data from form input.
 * Then it passes the data to the async function updateProfile(profile) in order to send the new data to the correct API endpoint.
 */

export async function setUpdateProfileListener() {
  const form = document.querySelector("#updateProfile");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      
      updateProfile(profile);
    });
  }
}

setUpdateProfileListener();
