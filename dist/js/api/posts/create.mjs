import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";

export async function createPost(postData) {
  const createPostUrl = API_SOCIAL_URL + action;

  const token = load("token");

  const response = await fetch(createPostUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(postData),
  });

  console.log(response);
  const json = await response.json();
  console.log(json);
}
