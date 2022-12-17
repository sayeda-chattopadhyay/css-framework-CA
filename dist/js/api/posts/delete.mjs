import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

export async function removePost(id = 0) {
  const action = "/posts";
  const method = "delete";

  if (!id) {
    throw new Error("You need to provide a postId to delete a post");
  }

  const Url = `${API_SOCIAL_URL}${action}/${id}`;

  console.log(Url);

  const token = load("token");
  console.log(token);

  if (!token) {
    throw new Error("You must be logged in to delete a post");
  }

  const response = await fetch(Url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: method,
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error("this post can not be deleted");
}
