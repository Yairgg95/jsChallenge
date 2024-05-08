let token = localStorage.getItem("token");

console.log(token);

token
  ? window.open("../views/homepage.html", "_self")
  : window.open("../views/homepageLogin.html", "_self");
