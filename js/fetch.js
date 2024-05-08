const createUser = async (userObject) => {
    let response = await fetch(
      "https://jschallengedb-default-rtdb.firebaseio.com/posts/.json",
      {
        method: "POST",
        body: JSON.stringify(userObject),
      }
    );
    let data = await response.json();
    console.log(response);
    console.log(data);
    return data;
  };

let savePost = document.getElementById("btnPost");

saveUser.addEventListener("click", async () => {
  let imagen = document.getElementById("postImage").value;
  let titulo = document.getElementById("postTitle").value;
  let descripcion = document.getElementById("postContent").value;
  let userObject = { imagen, titulo, descripcion };
  console.log(userObject);
  let response = await createUser(userObject);
  console.log(response);
});