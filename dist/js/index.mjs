import * as listeners from "./listeners/index.mjs";
import * as views from "./views/index.mjs";

function router() {
  const path = location.pathname;

  console.log(path);

  switch (path) {
    case "/profile/login/login.html":
      listeners.setLoginFormListener();
      break;

    case "/profile/register/register.html":
      listeners.setRegisterFormListener();
      break;

    case "/post/index.html": // home page
      views.displayAllPosts();
      listeners.setCreatePostListener();
      listeners.setSearchPostsListener();
      listeners.setLogoutButtonListener();
      break;

    case "/post/edit/index.html":
      listeners.setUpdatePostListener();
      break;

    case "/profile/profile.html": // profile page
      views.displayAllprofilePosts();
      listeners.setLogoutButtonListener();
      break;

    // case "/post/specificPost/index.html":
    //   views.displaySinglePost();
    //   break;
  }
}

router();
