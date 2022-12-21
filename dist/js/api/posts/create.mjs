import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

/**
 * This function sends user posts to api server.
 * @param {object} postData // the data that users puts in the create post form
 * @returns {object}
 * @example
 *  ```js
 * //
 * createPost(postData)
 * // returns {title: 'Winter in Norway', body: 'Along the coast, temperatures usually stay around …rience an bone chilling minus 40 degrees Celsius!', tags: Array(2), media: 'https://picsum.photos/id/29/200', created: '2022-12-21T01:27:20.689Z', …}
 * ```
 */

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
