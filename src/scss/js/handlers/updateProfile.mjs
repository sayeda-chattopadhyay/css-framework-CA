// import { getPosts, updatePost } from "../api/posts/index.mjs";

// export * from "../api/posts/update.mjs";

import { updateProfile } from "../api/profile/update.mjs";
// import { getPost } from "../api/posts/specificPost.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#updateProfile");
  if (form) {
    // const button = form.querySelector("button");
    // button.disabled = true;
    // const profile = await getProfile(name);

    // form.name.value = profile.name;
    // form.email.value = profile.email;
    // form.banner.value = profile.banner;
    // form.avatar.value = profile.avatar;

    // button.disabled = false;

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
