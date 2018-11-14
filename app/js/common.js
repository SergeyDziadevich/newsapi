//import articleRender from './articleCard.js';

const newsContainer = document.getElementById('news-container'),
  newsApiKey = 'eabd967104da4e07a9c41b1342a889b1';


// let newsSrc = 'bbc-news',
//   urlNews = `https://newsapi.org/v2/top-headlines?sources=${newsSrc}&apiKey=${newsApiKey}`;
//
//
// fetch(new Request(urlNews))
//   .then(response => {
//     response.json().then(news => {
//       renderNews(newsContainer, news)
//     });
//   });
//
function renderNews(elemId, news) {
  let elem = elemId;
  if (elem && news.status == 'ok') {
    elem.innerHTML = news.articles
      .map(a => '<li class="col-xs-12 col-sm-12 col-lg-6 col-xl-6">' + render(a) + '</li>')
      .reduce((txt, li) => txt + li, '<ul class="articles row">') + '</ul>';
  }
}


// document.querySelector('.select-channel ul').addEventListener('click', function (e) {
//
//   let menuList = document.querySelectorAll(".select-channel ul li");
//   menuList.forEach(function (item) {
//     item.classList.remove("active");
//   });
//
//   let newsSrc = e.target.id;
//
//   e.target.classList.add("active");
//
//   urlNews = `https://newsapi.org/v2/top-headlines?sources=${newsSrc}&apiKey=${newsApiKey}`;
//
//   fetch(new Request(urlNews))
//     .then(response => {
//       response.json().then(news => {
//         renderNews(newsContainer, news)
//       });
//     });
// });

