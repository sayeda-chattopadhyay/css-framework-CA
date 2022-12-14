export function profileLogOut() {
  const logOutLink = document.getElementById("logOut");
  console.log(logOutLink);

  logOutLink.addEventListener("click", (event) => {
    console.log("object");
    localStorage.removeItem(key);
  });
}
