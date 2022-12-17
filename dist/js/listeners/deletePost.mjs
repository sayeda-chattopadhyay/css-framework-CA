import * as api from "../api/posts/delete.mjs";

export function setDeleteButtonListener() {
  const deleteButton = document.querySelectorAll("[data-delete-id]");

  console.log("deleteButton", deleteButton);

  deleteButton.forEach(function (button) {
    button.addEventListener("click", deletePost);
  });
}

export async function deletePost(event) {
  console.log(event.target.dataset.deleteId);

  if (confirm("Are you sure you want to delete the post?")) {
    const { deleteId } = event.target.dataset;

    await api.removePost(deleteId);
    window.location.reload();
  }
}
