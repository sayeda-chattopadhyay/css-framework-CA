import { updateProfile } from "../api/profile/profileDetails/update.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#updateProfile");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);
      // post.id = id;

      // if (!post.tags.trim()) {
      //   delete post.tags;
      // } else {
      //   post.tags = post.tags.split(",");
      // }
      // console.log("post", post);

      // Send it to the API
      updateProfile(profile);
    });
  }
}

setUpdateProfileListener();
