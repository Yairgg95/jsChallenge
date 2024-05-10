const filterBtn = document.getElementById('filter-btn');
const postWrapper = document.getElementById('post-wrapper');
const cards = [...postWrapper.children]; 

filterBtn.addEventListener('click', () => {
  const filteredCards = cards.sort((a, b) => {
    const dateA = new Date(a.dataset.creationDate);
    const dateB = new Date(b.dataset.creationDate);
    return dateA - dateB;
  });

  postWrapper.innerHTML = '';
  filteredCards.forEach((card) => {
    postWrapper.appendChild(card);
  });
});