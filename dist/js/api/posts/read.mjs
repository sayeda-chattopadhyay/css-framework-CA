import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

/**
 * getPosts() function fetching all the posts from server that users have created.
 * searchPosts(tag) function fetches the posts that the users search through tag
 * getPost(id) fetches single post by its id.
 * getProfilePosts() fetche users own created posts
 *
 *
 */

const action = "/posts/";
const qs = "?_author=true&_comments=true&_reactions=true";

export async function getPosts() {
  const url = `${API_SOCIAL_URL}${action}${qs}`;

  const token = load("token");
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(" Fetching posts failed");
}

////********search posts ***********/

export async function searchPosts(tag) {
  const url = `${API_SOCIAL_URL}${action}${qs}&_tag=${tag}`;

  const token = load("token");
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Searching posts failed");
}

////********get posts by id***********/

export async function getPost(id) {
  if (!id) {
    throw new Error("No ID supplied");
  }
  const url = `${API_SOCIAL_URL}${action}${id}${qs}`;

  const token = load("token");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Fetching post failed");
}

//******Get Profile post */

export async function getProfilePosts() {
  const action = "/profiles/";
  const token = load("token");
  const profile = load("profile");
  const profileName = profile?.name;

  const getProfileUrl = API_SOCIAL_URL + action + profileName;
  const getProfilePostsUrl = getProfileUrl + "/posts";

  const response = await fetch(getProfilePostsUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(" Fetching posts failed");
}
