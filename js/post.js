const postContainer = document.getElementById('post-container');

const fetchPosts = async () => {
  try {
    const response = await fetch('https://post-9851b-default-rtdb.firebaseio.com/posts');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const renderPost = (post) => {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const titleElement = document.createElement('h2');
  titleElement.textContent = post.titulo;
  postElement.appendChild(titleElement);

  const tagsinElement = document.createElement('div');
  post.tagsin.forEach((tag) => {
    const tagElement = document.createElement('span');
    tagElement.textContent = tag;
    tagsinElement.appendChild(tagElement);
  });
  postElement.appendChild(tagsinElement);

  const autorElement = document.createElement('p');
  autorElement.textContent = `autor: ${post.autor}`;
  postElement.appendChild(autorElement);

  const contentElement = document.createElement('p');
  contentElement.textContent = post.contenido;
  postElement.appendChild(contentElement);

  const reactionsElement = document.createElement('p');
  reactionsElement.textContent = `Reactions: ${post.reacciones}`;
  postElement.appendChild(reactionsElement);

  const commentsElement = document.createElement('p');
  commentsElement.textContent = `Comments: ${post.comentarios}`;
  postElement.appendChild(commentsElement);

  const pictureElement = document.createElement('img');
  pictureElement.src = post.imagen;
  postElement.appendChild(pictureElement);

  postContainer.appendChild(postElement);
};

const renderPosts = async () => {
  const posts = await fetchPosts();
  posts.forEach((post) => {
    renderPost(post);
  });
};

renderPosts();