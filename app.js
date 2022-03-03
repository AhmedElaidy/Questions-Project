const btns = document.querySelectorAll(".question-btn");
const articles = document.querySelectorAll("article");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
      const question = e.currentTarget.parentElement.parentElement;
      question.classList.toggle("show-text");
      articles.forEach(function(article){
        if (article !== question){
            article.classList.remove("show-text")
        } 
     });
  });
});
