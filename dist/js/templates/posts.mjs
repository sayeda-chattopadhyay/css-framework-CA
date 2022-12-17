import * as listeners from "../listeners/index.mjs";

export function createPostsHTML(posts) {
  const postCardsLists = document.getElementById("postCardsLists");

  if (posts.length === 0) {
    return (postCardsLists.innerHTML = "No posts found");
  }

  postCardsLists.innerHTML = "";

  posts.forEach(function (post) {
    postCardsLists.innerHTML += `
                              <div class="card">
                                <a href="../../../post/specificPost/index.html?id=${
                                  post.id
                                }" class="card" style="width: 18rem;">
                                  <div class="d-flex justify-content-between">
                                      <div style="overflow:hidden; width:300px; height:300px;"> 
                                        <img src="${post.media}" alt="${
      post.title
    }" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;"/ >
                                      </div>
                                      <div class="card-body">
                                        <h2 class="card-title">${
                                          post.title
                                        }</h2>
                                        <p class="card-text">${post.body}</p>
                                        <p>By ${post.author.name}</p>
                                        <p>Date: ${post.created}</p>
                                        <p>comment:${post.comments}</p>
                                        <p>reactions:${post.reaction}</p>
                                        <div id="tag-container" class="text-muted fst-italic">Tag: ${[
                                          ...post.tags,
                                        ]}</div>
                                        <a href="../../../post/specificPost/index.html?id=${
                                          post.id
                                        }&name=${
      post.author.name
    }" class="btn btn-primary">View Post</a>
                                      </div>
                                  </div>
                                </a>
                              </div>`;
  });
}

/////Create profile posts

export function createProfilePostHtml(posts) {
  const postCardsContainer = document.getElementById("postCardsContainer");

  postCardsContainer.innerHTML = "";

  posts.forEach(function (post) {
    const { media, title, body, created, id } = post;

    postCardsContainer.innerHTML += ` <div class="d-flex justify-content-center border border-primary my-4" >
                                          <div>
                                              <img src="${media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${title}"/ >
                                          </div>
                                          <div class="card-body">
                                            <h2 class="card-title">${title}</h2>
                                            <p class="card-text">${body}</p>
                                            <p class="card-text">Date:${created}</p>
                                            <a href="/post/edit/index.html?id=${id}" class="btn btn-primary">Edit Post</a> 
                                            <a href="/post/specificPost/index.html?id=${id}" class= "btn btn-primary">View Post</a>
                                            <button data-delete-id=${id} class="delete-post">Delete Post</button>
                                          </div>

   </div>`;
  });
}

//**************Single post for specific page****** */

// function createHTML(details) {
//   const specificPostContainer = document.getElementById("specificPost");

//   specificPostContainer.innerHTML += ` <div class="card" style="width: 18rem;">
//                                             <div class="">
//                                                 <img src="${details.media}" class="card-img-top img-thumbnail style="width: 18rem;height : 18rem;" alt="${details.title}"/>
//                                             </div>
//                                             <div class="card-body">
//                                                 <h2 class="card-title">${details.title}</h2>
//                                                 <p class="card-text">${details.body}</p>
//                                                 <p class="card-text">By ${details.author}</p>
//                                                 <p class="card-text">By ${details.created}</p>

//                                             </div>
//                                         </div>`;
// }
