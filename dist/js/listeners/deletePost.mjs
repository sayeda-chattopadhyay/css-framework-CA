import * as api from "../api/posts/delete.mjs";

/**
 * Selects all delete button through data-set id attribute.
 * Use forEach method to loop throgh and adds eventlistener to all delete button to delete the post.
 * On click event on the button , deletePost(event) function will run and receives the id from event.target.dataset;
 * passes the id to the async removePost(deleteId) to delete specified post.
 */

export function setDeleteButtonListener() {
  const deleteButton = document.querySelectorAll("[data-delete-id]");

  deleteButton.forEach(function (button) {
    button.addEventListener("click", deletePost);
  });
}

export async function deletePost(event) {
  if (confirm("Are you sure you want to delete the post?")) {
    const { deleteId } = event.target.dataset;

    await api.removePost(deleteId);
    window.location.reload();
  }
}
