import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");

const action = "/posts";
const method = "put";

/**
 * Every post has a unique id. Get this id from url and create Api endpoint where updated data for a specific post needs to be sent.
 * This Async function sends updated post to the API cendpoint.
 */

const updatePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

export async function updatePost(post) {
  try {
    if (!id) {
      throw new Error("You need to provide a postId to update the post");
    }

    const token = load("token");

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
      window.location.reload();
      return await response.json();
    }
    throw new Error("this post can not be deleted");
  } catch (error) {
    throw alert("Something went wrong to update the post");
  }
}
