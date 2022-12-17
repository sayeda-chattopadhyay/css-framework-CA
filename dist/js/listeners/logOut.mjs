export function setLogoutButtonListener() {
  const logOutbutton = document.getElementById("logOut");
  console.log(logOutbutton);

  if (logOutbutton) {
    logOutbutton.addEventListener("click", () => {
      if (confirm("Do you want to log out")) {
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        window.location.replace("/profile/login/login.html");
      }
    });
  }
}
