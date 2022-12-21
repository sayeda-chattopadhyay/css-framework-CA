import { createPost } from "../api/posts/index.mjs";
import { displayAllPosts } from "../views/posts/display.mjs";

/**
 * Listens to submit event on createPost form and
 * pass the input value to createPost function and display the post through displayAllPosts function.
 */

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());

      console.log("post", postData);

      if (!postData.tags.trim()) {
        delete postData.tags;
      } else {
        postData.tags = postData.tags.split(",");
      }

      // Send it to the API
      try {
        await createPost(postData);

        displayAllPosts();
      } catch (error) {
        console.log(error);
      }
    });
  }
}
