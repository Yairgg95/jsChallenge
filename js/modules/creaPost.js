import { createPost } from "../js/modules/postsApi.js";

let publishPost = document.getElementById("btnPost");

publishPost.addEventListener("click", async () => {
  let fields = document.querySelectorAll("#new-post");

  let PostObject = {};

  fields.forEach((field) => {
    let type = field.type;
    console.log(type);
    let property = field.name;
    let value = field.value;

    /*if (type === "text") {
      PostObject[property] = value;
    } else if (type === "number") {
      PostObject[property] = Number(value);
    } else if (type === "checkbox") {
      PostObject[property] = field.checked;
    }*/

    switch (type) {
      case "text":
        PostObject[property] = value;
        break;
      case "number":
        PostObject[property] = Number(value);
        break;
      case "checkbox":
        PostObject[property] = field.checked;
    }
  });
  console.log(PostObject);
  let savedPost = await createPost(PostObject);
  console.log(savedPost);
});
