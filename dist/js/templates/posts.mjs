export function createPostsHTML(posts) {
  const postCardsLists = document.getElementById("postCardsLists");

  if (posts.length === 0) {
    return (postCardsLists.innerHTML = "No posts found");
  }

  postCardsLists.innerHTML = "";

  posts.forEach(function (post) {
    postCardsLists.innerHTML += `
      <div class="d-flex justify-content-center border border-primary my-4 ">
        <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="card" style="width: 18rem;">
          <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
          <div class="card-body">
            <h2 class="card-title">${post.title}</h2>
            <p class="card-text">${post.body}</p>
            <p>By ${post.author.name}</p>
            <p>Date: ${post.created}</p>
            <p>comment:${post.comments}</p>
            <p>reactions:${post.reaction}</p>
            <a href="../../../post/specificPost/index.html?id=${post.id}" class="btn btn-primary">View Post</a>
          </div>
        </a>
      </div>`;
  });
}

// <a href="../../../../../post/specificPost/index.html?id=${post.id}" class="btn btn-primary">View Post</a>
