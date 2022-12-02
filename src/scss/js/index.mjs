// import * as constants from "./api/constant.mjs";

import { setRegisterFormListener } from "./handlers/register.mjs";

// setRegisterFormListener();

import { setLoginFormListener } from "./handlers/login.mjs";

// import everything from index.mjs from post
import * as post from "./api/posts/index.mjs";

// import { createPosts } from "./api/posts/index.mjs";

// setLoginFormListener();

const path = location.pathname;

if (path === "/login.html") {
  setLoginFormListener();
}

if (path === "/register.html") {
  setRegisterFormListener();
}

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

// post.createPosts();
// post.updatePost();
// post.removePost();
// post.getPosts().then(console.log);
post.getPost(82).then(console.log);

// remove post
// import {removePost} from "./api/posts/delete.mjs"
// removePost(5088);

// post.removePost(5095);

// new Post

// createPost({
//   title: "Greeting",
//   body: "Have a good day",
// });
