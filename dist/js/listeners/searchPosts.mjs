import * as views from "../views/index.mjs";

export function setSearchPostsListener() {
  const form = document.querySelector("form#searchPosts");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const tag = formData.get("tag");
      views.displaySearchedPosts(tag);
    });
  }
}
