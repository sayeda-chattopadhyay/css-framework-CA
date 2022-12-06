import * as listeners from "./handlers/index.mjs";

import * as templates from "./templates/post.mjs";

import * as postMethods from "./api/posts/index.mjs"; // all CRUD functions are imported here as postMethods. If we need to run createPosts(). We have to call it as postMethods.createPosts()

const path = location.pathname;

if (path === "/profile/login/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/register.html") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/index.html") {
  listeners.setCreatePostListener();
} else if (path === "/post/edit/index.html") {
  listeners.setUpdatePostListener();
}

// if (path === "/register.html") {
//     setRegisterFormListener();
//   }

// Test Function

// async function testTemplate() {
//   try {
//     const posts = await postMethods.getPosts();
//     const post = posts[162];
//     console.log(post);
//     const container = document.querySelector("#post");

//     // render the post with the below function (the post will show inside the parent that is container here)
//     renderPostTemplate(post, container);
//   } catch (error) {
//     console.log(error);
//   }
// }

// testTemplate();

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
postMethods.getPosts().then(console.log);
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
