import { createPost } from "../api/posts/index.mjs";
// import { CREATE_POST_URL } from "../api/constant";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost"); // in html page post->create->index.html line- 227

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      console.log(form);

      const formData = new FormData(form);
      //   const post = Object.fromEntries(formData.entries());
      const postData = Object.fromEntries(formData.entries());
      console.log("postData", postData);

      // if (!postData.tags.trim()) {
      //   delete postData.tags;
      // } else {
      //   postData.tags = postData.tags.split(",");
      // }

      console.log("postData", postData);

      // Send it to the API
      createPost(postData);
    });
  }
}

setCreatePostListener();

// NOTE
// line-1 createPost() is created to send data which is collected in crea

// problem can be here createPost(post)

// Trying again

// function setCreatePostListener() {
//   const form = document.getElementById("createPost");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e);
//     const form = e.target;
//     const title = form[0].value;
//     const body = form[1].value;
//     const image = form[2].value;
//     const create_POST = { form, title, body, image };

//     console.log(create_POST);

//     createPost(CREATE_POST_URL, create_POST);
//   });
// }
// setCreatePostListener();
