import { updatePost } from "../api/posts/update.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#updatePost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log(post);
      updatePost(post);
    });
  }
}

setUpdatePostListener();
