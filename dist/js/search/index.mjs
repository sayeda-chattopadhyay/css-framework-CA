// import { getProfilePosts } from "../api/posts/profile.mjs";

export function setupSearchForm(posts) {
  const searchForm = document.getElementById("form#searchForm");
  console.log(event);
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    console.log(form);
    const searchBarValue = form.searchBar.value;
    console.log(searchBarValue);
    console.log(searchBarValue, posts);

    const searchValue = searchBarValue.toLoweCase();

    const filteredPosts = posts.filter(function (post) {
      const title = post.title.toLoweCase();
      const body = post.body.toLoweCase();
      return title.includes(searchValue);
    });
    console.log(filteredPosts);
  });
}

// setupSearchForm(posts);
