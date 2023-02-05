import { updatePost } from "../api/posts/update.mjs";

/**
 * This function selects html form , adds submit event listener to the form. collects updated new data and passes the data to the async
 * function updatePost(post) to send it to the APi end point in order to updated the post.
 */

export async function setUpdatePostListener() {
  const form = document.querySelector("#updatePost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      updatePost(post);
    });
  }
}

setUpdatePostListener();
