/**
 * This is a reusable function which shows loading text while rendering posts to the page. It is good for usablity purpose.
 * @param {number} containerId this is the id of the htnl conatiner.
 */

export function displayLoading(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const div = document.createElement("div");
  const loadingIndicator = document.createTextNode("Loading...");
  div.appendChild(loadingIndicator);
  container.appendChild(div);
}

/**
 * This is a reusable function which shows error message when error occures. It is good for usablity purpose.
 * @param {number} containerId this is the id of the htnl conatiner.
 * @param {string} error this is the error message.
 */

export function displayError(containerId, error) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("error");
  const errorMessage = document.createTextNode(error);
  div.appendChild(errorMessage);
  container.appendChild(div);
}
