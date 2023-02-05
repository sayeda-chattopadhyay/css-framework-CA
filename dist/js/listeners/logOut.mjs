/**
 * This function selects logout buton, adds click event to the button.
 * Once clickingon the button a function will run that removes the token and profile details of the user from the local storage.
 * Then it redirects the users to the login page.
 */

export function setLogoutButtonListener() {
  const logOutbutton = document.getElementById("logOut");

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
