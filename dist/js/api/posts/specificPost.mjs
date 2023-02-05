import { API_SOCIAL_URL } from "../constant.mjs";
import { load } from "../../storage/index.mjs";

/**
 * getPost(id) function fetches post from api server by its unique id. Retieves the data in object and passes to
 * createHTML(details)function to create dynamic html.
 */

const querryString = document.location.search;
console.log(querryString);
const params = new URLSearchParams(querryString);
console.log(params);
const id = params.get("id");
const name = params.get("name");
console.log(name);
console.log(id);

const action = "/posts";

export async function getPost(id) {
  if (!id) {
    throw new Error("Required a postID");
  }

  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const token = load("token");

  console.log(token);

  const response = await fetch(getPostUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // if (response.ok) {
  //   return await response.json();
  // }

  const postDetails = await response.json();

  console.log("postDetails", postDetails);

  // specificPostContainer.innerHTML = "";

  createHTML(postDetails);

  // specificPostContainer.innerHTML = errorMessage("Something goes wrong");
}

getPost(id);

function createHTML(details) {
  const specificPostContainer = document.getElementById("specificPost");

  specificPostContainer.innerHTML += ` <div class="card" style="width: 18rem;">
                                            <div class="">
                                                <img src="${details.media}" class="card-img-top img-thumbnail style="width: 18rem;height : 18rem;" alt="${details.title}"/>
                                            </div>
                                            <div class="card-body">
                                                <h2 class="card-title">${details.title}</h2>
                                                <p class="card-text">${details.body}</p>
                                                <p class="card-text">By ${details.created}</p>
                                            </div>
                                        </div>`;
}
