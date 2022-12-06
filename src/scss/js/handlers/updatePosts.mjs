import { getPosts, updatePost } from "../api/posts/index.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#updatePost"); //line 74

  const url = new URL(location.href); // new url class
  const id = url.searchParams.get("id"); // to get id parameter from url

  console.log(id);

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;
    const post = await getPosts(id);

    form.title.value = post.title;
    form.body.value = post.value;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = true;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log(post);
      post.id = id;

      // Send it to the API
      updatePost(post);
    });
  }
}
