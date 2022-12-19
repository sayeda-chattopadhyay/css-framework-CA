import * as api from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import * as listeners from "../../listeners/index.mjs";

export async function displayAllPosts() {
  try {
    templates.displayLoading("postCardsLists"); // ui.displayLoading("postCardsLists");
    const posts = await api.getPosts(); // getting all posts from api
    templates.createPostsHTML(posts); // passing these posts to the createPostsHTML
  } catch (error) {
    templates.displayError("postCardsLists", error); // ui.displayError("postCardsLists", error)
  }
}

//************Search Posts ********/

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
