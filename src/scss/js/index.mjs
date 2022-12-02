// import * as constants from "./api/constant.mjs";

import { setRegisterFormListener } from "./handlers/register.mjs";

import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs";

import * as postMethods from "./api/posts/index.mjs";

import { renderPostTemplate } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/login.html") {
  setLoginFormListener();
}

if (path === "/register.html") {
  setRegisterFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts[162];
  //   console.log(post);
  const container = document.querySelector("#post");
  renderPostTemplate(post, container);
}

testTemplate();

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

// createPost({
//   title: "Greeting",
//   body: "Have a good day",
// });
