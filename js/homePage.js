

const createPostCard = (postObject, isFirstPost) => {
  const { avatarImge, autor, comentarios, imagen, reacciones, tagsin, titulo, key } = postObject;

  // Crear el div principal con las clases y estilos
  const mainDiv = document.createElement('div');
  mainDiv.className = 'w-100 col card justify-content-center mb-4';
  mainDiv.style.width = '18rem';

  // Crear el cuerpo de la tarjeta
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  // Crear la estructura interna del cuerpo de la tarjeta
  const row = document.createElement('div');
  row.className = 'row my-2';

  // Crear el avatar del autor
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'btn col-1 outline-none btn-primary d-flex justify-content-start';

  const avatarImg = document.createElement('img');
  avatarImg.alt = '';
  // agregar a la base de datos imagenes de avatar para que sean diferentes y sustituir la url de abajo por la key avatarImg de cada objeto
  avatarImg.src = 'https://res.cloudinary.com/practicaldev/image/fetch/s--QM2H33ep--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/7463/4c49cf34-952f-455a-a8d4-e49f7ad4a7f4.png';
  avatarDiv.appendChild(avatarImg);

  // Agregar avatar al row
  row.appendChild(avatarDiv);

  // Crear y agregar el título
  const title = document.createElement('h5');
  title.className = 'col card-title';
  const titleLink = document.createElement('a');
  titleLink.href = '#';
  titleLink.className = 'nav-link';
  titleLink.textContent = titulo;
  title.appendChild(titleLink);
  row.appendChild(title);

  // Agregar el row al cuerpo de la tarjeta
  cardBody.appendChild(row);

  // Crear y agregar las etiquetas de la historia
  const storyTags = document.createElement('div');


  // Verificar si tagsin es un array antes de iterar sobre él
  if (Array.isArray(tagsin)) {
    tagsin.forEach(tag => {
      const tagLink = document.createElement('a');
      tagLink.href = '#';
      tagLink.className = 'crayons-tag';
      tagLink.innerHTML = tag;
      storyTags.appendChild(tagLink);
    });
  } else {
    // Manejar el caso donde tagsin no es un array
    console.error('Error: tagsin is not an array:', tagsin);
    // Puedes mostrar un mensaje alternativo o manejar de otra manera el caso inesperado
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error: Tags not available';
    storyTags.appendChild(errorMessage);
  }

  // Agregar las etiquetas al cuerpo de la tarjeta
  cardBody.appendChild(storyTags);

  // Agregar contador de reacciones y comentarios
  const reactionsCount = document.createElement('p');
  reactionsCount.className = 'fs-6 me-3 mt-1';
  reactionsCount.textContent = `${reacciones} reactions`;

  const commentsCount = document.createElement('p');
  commentsCount.className = 'fs-6 mt-1';
  commentsCount.textContent = `${comentarios} comments`;

  cardBody.appendChild(reactionsCount);
  cardBody.appendChild(commentsCount);

  // Si es el primer post, agregar la imagen
  if (isFirstPost && imagen) {
    // Crear el enlace con la imagen
    const link = document.createElement('a');
    link.href = '#';

    const img = document.createElement('img');
    img.src = imagen;
    img.className = 'card-img-top';
    img.alt = '...';
    link.appendChild(img);

    // Agregar el enlace al div principal
    mainDiv.appendChild(link);
  }

  // Agregar el cuerpo de la tarjeta al div principal
  mainDiv.appendChild(cardBody);

  return mainDiv;
};

const printPosts = (postsArray, containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Limpiar el contenido previo

  // Iterar sobre los posts
  postsArray.forEach((post, index) => {
    // Determinar si es el primer post
    const isFirstPost = index === 0;
    const postCard = createPostCard(post, isFirstPost);
    container.appendChild(postCard);
  });
};

const fetchAllPosts = async () => {
  try {
    const response = await fetch(
      `https://post-9851b-default-rtdb.firebaseio.com/posts/.json`
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

const printAllPosts = async () => {
  try {
    const postsArray = await fetchAllPosts();
    printPosts(postsArray, "post-wrapper");
  } catch (error) {
    console.error("Error printing posts:", error);
  }
};

// Llamar a la función para imprimir todos los posts al cargar la página
printAllPosts();


