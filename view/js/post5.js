const postElement = document.createElement('div');
postElement.classList.add('post');

const titleElement = document.createElement('h2');
titleElement.textContent = post.title;
postElement.appendChild(titleElement);

const tagsElement = document.createElement('p');
tagsElement.textContent = `Tags: ${post.tags.join(', ')}`;
postElement.appendChild(tagsElement);

const authorElement = document.createElement('p');
authorElement.textContent = `Author: ${post.author}`;
postElement.appendChild(authorElement);

const dateElement = document.createElement('p');
dateElement.textContent = `Created: ${new Date(post.createdAt).toLocaleDateString()}`;
postElement.appendChild(dateElement);

const reactionsElement = document.createElement('div');
reactionsElement.classList.add('reactions');

post.reactions.forEach(reaction => {
  const reactionElement = document.createElement('span');
  reactionElement.textContent = `${reaction.type}: ${reaction.count}`;
  reactionsElement.appendChild(reactionElement);
});

postElement.appendChild(reactionsElement);

document.body.appendChild(postElement);