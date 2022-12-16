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
                                        <a href="../../../post/specificPost/index.html?id=${ post.id}&name=${ post.author.name}" class="btn btn-primary">View Post</a>
                                      </div>
                                  </div>
                                </a>
                              </div>`;
  });
}

/////Create profile posts

export function createProfilePostHtml(posts) {
  const postCardsContainer = document.getElementById("postCardsContainer");
  posts.forEach(function (post) {
    postCardsContainer.innerHTML += ` <div class="d-flex justify-content-center border border-primary my-4" >
                                          <div>
                                              <img src="${post.media}" class="card-img-top img-thumbnail style="width: 18rem; height : 18rem;" alt="${post.title}"/ >
                                          </div>
                                          <div class="card-body">
                                            <h2 class="card-title">${post.title}</h2>
                                            <p class="card-text">${post.body}</p>
                                            <p class="card-text">Date:${post.created}</p>
                                            <a href="../../../../../post/edit/index.html?id=${post.id}" class="btn btn-primary">Edit Post</a> 
                                            <a href="../../../../../post/specificPost/index.html?id=${post.id}" class= "btn btn-primary">View Post</a>
                                            <a href="" id=${post.id} class="delete-post">Delete Post</a>
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





//*****@@@@@@@@@@@@@@@ */





//createElement

// const postCardsContainer = document.getElementById("postCardsContainer");

// export function createProfilePostHtml(posts) {
//   posts.forEach(function (post) {
//     const card = document.createElement("div");
//     const cardImage = document.createElement("div");
//     const img = document.createElement("img");
//     const cardBody = document.createElement("div");
//     const cardTitle = document.createElement("h2");
//     // const cardtext = document.createElement("p");
//     const cardDate = document.createElement("p");
//     const viewPost = document.createElement("a");
//     const editPost = document.createElement("a");
//     const button = document.createElement("button");

//     postCardsContainer.appendChild(card);

//     card.appendChild(cardImage);
//     card.appendChild(cardBody);
//     cardImage.appendChild(img);
//     cardBody.appendChild(cardTitle);
//     // cardBody.appendChild(cardText);

//     card.classList.add("d-flex", "my-4");

//     img.classList.add("card-img-top img-thumbnail");

//     cardImage.setAttribute = ("src", post.media);

//     cardBody.classList.add("card-body");

//     cardTitle.classList.add("card-title");
//     cardTitle.innerHTML = post.title;

//     // cardtext.classList.add("card-text");

//     // cardtext.innerText = post.body;

//     cardDate.classList.add("card-text");

//     cardDate.innerText = post.created;

//     viewPost.classList.add("btn btn-primary");

//     viewPost.innerText = "View Post";
//     viewPost.href = "../../../../../post/specificPost/index.html?id=${post.id}";

//     editPost.classList.add("btn btn-primary");

//     editPost.href = "../../../../../post/edit/index.html?id=${post.id}";

//     button.classList.add("btn btn-primary");
//   });
// }
