import { createPost } from "./PostApi.js";

let publishPost = document.getElementById("btnPost");

publishPost.addEventListener("click", async () => {
  let fields = document.querySelectorAll("#new-post input");
  let tagsDiv = document.getElementById("Post-tagsInput");

  let PostObject = {};

  fields.forEach((field) => {
    let type = field.type;
    let property = field.name;
    let value = field.value;
    switch (type) {
      case "text":
      case "number":
      case "checkbox":
        PostObject[property] = value === "" ? null : value;
        break;
    }
  });

  const tagsList = tagsDiv.querySelectorAll("span");
  const tags = [];
  tagsList.forEach((tag) => {
    tags.push(tag.textContent);
  });

  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  // Generar Ranking
  const minRating = 1;
  const maxRating = 5;
  const randomRating = Math.floor(Math.random() * (maxRating - minRating + 1)) + minRating;

  PostObject["tags"] = tags; 
  PostObject["date"] = formattedDate; 
  PostObject["rating"] = randomRating;

  console.log(PostObject);
  let savedPost = await createPost(PostObject);
  console.log(savedPost);
  window.open("../../views/homepage.html", "_self");
});