export function LogOut() {
  const LogOut = document.getElementById("logOut");
  console.log(LogOut);

  LogOut.addEventListener("click", (event) => {
    localStorage.removeItem("token");
  });
}

LogOut();

//********

// export function signOut() {
//   localStorage.removeItem("accessToken");
//   // after removing token user is redirected to login
//   window.location.replace("/login.html");
// }
