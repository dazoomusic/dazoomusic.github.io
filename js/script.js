let sideMenu = false;
init();

function init() {
  showArticle(0);
  unshowSideMenu();
}

function showArticle(articleIndex) {
  // Hide all articles
  const articles = document.querySelectorAll('.article-container');
  articles.forEach(article => {
    article.classList.remove('active');
  });
  
  // Show the selected article
  const selectedArticle = document.getElementById(`article${articleIndex}`);
  
  // addToDom(articleIndexToarticleContent(articleIndex), selectedArticle);
  selectedArticle.classList.add('active');

  toggleSideMenu();
}

function toggleSideMenu() {
  if (sideMenu) unshowSideMenu();
  else showSideMenu();
}


function unshowSideMenu() {
  const selectedArticle = document.querySelector(`.sideMenu`);
  selectedArticle.classList.remove('active');
  sideMenu = false;

  // Enable scrolling
  document.body.style.overflow = '';
}


function showSideMenu() {
  const selectedArticle = document.querySelector(`.sideMenu`);
  selectedArticle.classList.add('active');
  sideMenu = true;

  // Disable scrolling
  document.body.style.overflow = 'hidden';
}

