(() => {
  const TIMEOUT = 200;
  const playArticles = document.querySelectorAll(".play__article");

  let timer;

  playArticles.forEach((article) => {
    const link = article.querySelector(".play__btn-link");

    article.addEventListener("mouseenter", () => {
      timer = setTimeout(() => {
        article.classList.add("play__article_active");
      }, TIMEOUT);
    });

    article.addEventListener("mouseleave", () => {
      clearTimeout(timer);
      article.classList.remove("play__article_active");
    });

    link.addEventListener("focus", () => {
      article.classList.add("play__article_active");
    });

    link.addEventListener("blur", () => {
      article.classList.remove("play__article_active");
    });
  });
})();
