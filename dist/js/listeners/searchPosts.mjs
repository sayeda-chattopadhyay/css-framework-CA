import * as views from "../views/index.mjs";

/**
 * This function retrieves form data . Gets tag and passes the tag to the displaySearchedPosts(tag) to show the posts related to the tag
 */

export function setSearchPostsListener() {
  const form = document.querySelector("form#searchPosts");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form); // inputs of the form.
      console.log(formData);
      const tag = formData.get("tag");
      views.displaySearchedPosts(tag);
    });
  }
}
