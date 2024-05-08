const createpostCard = (postObject) => {
  const { title, author, content, comentarios, tagsing, URL, key } = postObject;

  const container = document.createElement("div");
  container.classList.add("col");



  const postCard = document.createElement("div");
  postCard.classList.add(
    "card",
    "post-card",
    "p-0",
    "overflow-hidden",
    "h-100"
  );

  const row = document.createElement("div");
  row.classList.add("row", "g-0", "h-100");

  const containerImg = document.createElement("div");
  containerImg.classList.add("col-md-4");
  const postImage = document.createElement("img");
  postImage.classList.add("post-card__picture");
  postImage.src = URL;
  containerImg.appendChild(postImage);

  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("col-md-8");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-center");
  cardTitle.textContent = title;

  const ulFeatures = document.createElement("ul");
  ulFeatures.classList.add("list-group");

  const features = [
    { label: "author", value: author },
    { label: "content", value: content },
    { label: "tag", value: tagsing },
    { label: "comentarios", value:  comentarios },
  ];

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = ${feature.label}: ${feature.value};
    ulFeatures.appendChild(li);
  });

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(ulFeatures);
  cardBodyContainer.appendChild(cardBody);
  row.appendChild(containerImg);
  row.appendChild(cardBodyContainer);
  postCard.appendChild(row);
  aCard.appendChild(postCard);
  container.appendChild(aCard);

  return container;
};

const printposts = (postsArray, wrapperId) => {
  const wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";

  const fragment = document.createDocumentFragment();

  postsArray.forEach((post) => {
    const postCard = createpostCard(post);
    fragment.appendChild(postCard);
  });

  wrapper.appendChild(fragment);
};

const fetchAllposts = async () => {
  try {
    const response = await fetch(
      https://post-9851b-default-rtdb.firebaseio.com/posts/.json
    );
    const data = await response.json();
    const keys = Object.keys(data);
    const postsArray = keys.map((key) => ({ ...data[key], key }));
    return postsArray;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const printAllposts = async () => {
  try {
    const postsArray = await fetchAllposts();
    printposts(postsArray, "posts-wrapper");
  } catch (error) {
    console.error("Error printing posts:", error);
  }
};

let createBtn = document.getElementById("create-post-btn");
createBtn.addEventListener("click", () => {
  window.open("../views/crearpost.html", "_self");
});

printAllposts();