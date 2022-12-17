import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const querryString = document.location.search;
console.log(querryString);

const params = new URLSearchParams(querryString);
console.log(params);

const id = params.get("id");

console.log(id);

const action = "/posts";
const method = "put";

const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

console.log(updatePostUrl);

export async function updatePost(post) {
  if (!id) {
    throw new Error("You need to provide a postId to update the post");
  }

  console.log(updatePostUrl);

  const token = load("token");
  console.log(token);

  if (!token) {
    throw new Error("You must be logged in to delete a post");
  }

  const response = await fetch(updatePostUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: method,
    body: JSON.stringify(post),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error("this post can not be deleted");
}
