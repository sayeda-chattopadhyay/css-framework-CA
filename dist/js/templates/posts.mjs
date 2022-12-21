import * as listeners from "../listeners/index.mjs";

export function createPostsHTML(posts) {
  const postCardsLists = document.getElementById("postCardsLists");

  if (posts.length === 0) {
    return (postCardsLists.innerHTML = "No posts found");
  }

  postCardsLists.innerHTML = "";

  posts.forEach(function (post) {
    postCardsLists.innerHTML += ` <a href="/post/specificPost/index.html?id=${post.id}">
    <div class="d-flex justify-content-between border border-primary my-4 g-3" >
    <div style="overflow:hidden; width:300px; height:300px;">
      <img src="${post.media}" alt="${post.title}" width="100%" class="h-100 w-100 img-thumbnail" >
    </div>  
    <div class="card-body">
      <h2 class="card-title">${post.title}</h2>
      <p class="card-text">${post.body}</p>
      <p>Date: ${post.created}</p>
      <p class="card-text">By ${post.author.name}</p>
      <a href="/post/specificPost/index.html?id=${post.id}&name=${post.author.name}" class="btn btn-primary mt-4">View Post</a>
    </div>
</div>
</a>`;
  });
}

/////Create profile posts

export function createProfilePostHtml(posts) {
  const postCardsContainer = document.getElementById("postCardsContainer");

  postCardsContainer.innerHTML = "";

  posts.forEach(function (post) {
    const { media, title, body, created, id } = post; // Destructuring

    postCardsContainer.innerHTML += ` <div class=" d-flex justify-content-center border border-primary my-4 g-3" >
                                          <div class="col-4">
                                              <img src="${media}" width="100%" class="h-100 w-100 img-thumbnail" alt="${title}"/ >
                                          </div>
                                          <div class="card-body col-8">
                                            <h2 class="card-title">${title}</h2>
                                            <p class="card-text">${body}</p>
                                            <p class="card-text">Date:${created}</p>
                                            <a href="/post/edit/?id=${id}" class="btn btn-primary">Edit Post</a> 
                                            <a href="/post/specificPost/index.html?id=${id}" class= "btn btn-primary">View Post</a>
                                            <button data-delete-id=${id} class="delete-post border border-0">Delete Post</button>
                                          </div>

   </div>`;
  });
}
