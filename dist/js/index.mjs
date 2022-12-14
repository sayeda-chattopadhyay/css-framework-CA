import * as listeners from "./listeners/index.mjs";
// import * as templates from "./templates/post.mjs";
// import * as postMethods from "./api/posts/index.mjs"; // all CRUD functions are imported here as postMethods. If we need to run createPosts(). We have to call it as postMethods.createPosts()

import * as views from "./views/index.mjs";

const path = location.pathname;

console.log(path);

switch (path) {
  case "/profile/login/login.html":
    listeners.setLoginFormListener();
    break;

  case "/profile/register/register.html":
    listeners.setRegisterFormListener();
    break;

  case "/post/index.html":
    views.displayAllPosts();
    listeners.setCreatePostListener();
    listeners.setSearchPostsListener();
    break;

  case "/post/edit/index.html":
    listeners.setUpdatePostListener();
    break;
}

//******************** */

// if (path === "/profile/login/login.html") {
//   listeners.setLoginFormListener();
// } else if (path === "/profile/register/register.html") {
//   listeners.setRegisterFormListener();
// } else if (path === "/post/create/index.html") {
//   listeners.setCreatePostListener();
// } else if (path === "/post/edit/index.html") {
//   listeners.setUpdatePostListener();
// }

/////////////////////////////

// create post form
// document.querySelector("#create-post").addEventListener("click", function () {
//   createPosts({
//     title: "Testing Post 1",
//     body: "I am testing my first post",
//   });

//   //create post function call inside here
// });

//  need to remove this function it caused spammed

// createPosts({
//     title: "Testing Post 1",
//     body: "I am testing my first post",
//   });

// Update post

// updatePost({
//   id: 5088,
//   title: "Testing Post 1 updated",
//   body: "I am testing my first updated post",
// });

// calling remove post function

// removePost(5088);

//  calling all post releted function

// postMethods.createPosts();
// postMethods.updatePost();
// postMethods.removePost();
// postMethods.getPosts().then(console.log);
// postMethods.getPost(162).then(console.log);

// remove post
// import {removePost} from "./api/posts/delete.mjs"
// removePost(5088);

// post.removePost(5095);

// new Post

// listeners.createPost({
//   title: "Greeting",
//   body: "Have a good day",
// });
