const createPostCard = (postObject) => {
  const { titulo, autor, reacciones, comentarios, tagsin, imagen, key } = postObject;

  const postCard = document.createElement("div");
  postCard.classList.add(
    "col",
    "col-md-6",
    "col-lg-4",
    "mb-4",
    "position-relative"
  );

  const card = document.createElement("div");
  card.classList.add(
    "card",
    "h-100",
    "post-card",
    "overflow-hidden",
    "shadow",
    "border-radius-10"
  );

  const row = document.createElement("div");
  row.classList.add("row", "g-0");

  const containerImg = document.createElement("div");
  containerImg.classList.add("col-md-4");
  const postImage = document.createElement("img");
  postImage.classList.add("post-card__picture");
  postImage.src = imagen;
  containerImg.appendChild(postImage);

  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("col-md-8");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitulo = document.createElement("h5");
  cardTitulo.classList.add("card-titulo", "text-center");
  cardTitulo.textContent = titulo;

  const ulFeatures = document.createElement("ul");
  ulFeatures.classList.add("list-group");

  const features = [
    { label: "autor", value: autor },
    { label: "reacciones", value: reacciones },
    { label: "tags", value: tagsin },
    { label: "comentarios", value: comentarios },
  ];

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${feature.label}: ${feature.value}`;
    ulFeatures.appendChild(li);
  });

  cardBody.appendChild(cardTitulo);
  cardBody.appendChild(ulFeatures);
  cardBodyContainer.appendChild(cardBody);
  row.appendChild(containerImg);
  row.appendChild(cardBodyContainer);
  card.appendChild(row);
  postCard.appendChild(card);

  return postCard;
};

const fetchAllPosts = async () => {
  try {
    const response = await fetch(
      "https://post-9851b-default-rtdb.firebaseio.com/posts.json"
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

const printPosts = (postsArray, wrapperId) => {
  const wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";

  const fragment = document.createDocumentFragment();

  postsArray.forEach((post) => {
    const postCard = createPostCard(post);
    fragment.appendChild(postCard);
  });

  wrapper.appendChild(fragment);
};

const printAllPosts = async () => {
  try {
    const postsArray = await fetchAllPosts();
    printPosts(postsArray, "posts-wrapper");
  } catch (error) {
    console.error("Error fetching and printing posts:", error);
  }
};

printAllPost