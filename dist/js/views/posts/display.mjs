import * as api from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import * as listeners from "../../listeners/index.mjs";

export async function displayAllPosts() {
  try {
    templates.displayLoading("postCardsLists"); // ui.displayLoading("postCardsLists"); Loading indication to the html Post container
    const posts = await api.getPosts(); // getting all posts from api
    templates.createPostsHTML(posts); // passing these posts to the createPostsHTML
  } catch (error) {
    templates.displayError("postCardsLists", error); // ui.displayError("postCardsLists", error) displays error message
  }
}

//************Search Posts ********/

/**
 * This function shows the posts searched by its tag.
 * @param {string} tag This is the input(tag) that users put in the search form to search posts related to this tag.
 * This function do the api call api.searchPosts(tag), passes the tag as this parameter.
 * This async function searchPosts(tag) create url using this tag and get data from api and return arrays.
 * This arrays (here posts) passes to the reusuable createPostsHTML(posts) function to show the posts on the same container which contains all get posts.
 *
 */

export async function displaySearchedPosts(tag) {
  try {
    templates.displayLoading("postCardsLists");
    const posts = await api.searchPosts(tag);
    templates.createPostsHTML(posts);
  } catch (error) {
    templates.displayError("postCardsLists", error);
  }
}

export async function displayAllprofilePosts() {
  try {
    templates.displayLoading("postCardsContainer"); // ui.displayLoading("postCardsLists");
    const posts = await api.getProfilePosts();
    templates.createProfilePostHtml(posts);
    listeners.setDeleteButtonListener();
  } catch (error) {
    templates.displayError("postCardsContainer", error); // ui.displayError("postCardsLists", error)
  }
}

////*********** */single post*********

// import * as singlePost from "../../api/posts/specificPost.mjs";

export async function displaySinglePost() {
  try {
    templates.displayLoading("specificPostContainer"); // ui.displayLoading("postCardsLists");
    // const posts = await singlePost.getPost(id);
    const post = await api.getPost(id);
    // templates.createHTML(post);
    // templates.createSinglePostHTML(post);
  } catch (error) {
    templates.displayError("specificPostContainer", error); // ui.displayError("postCardsLists", error)
  }
}
