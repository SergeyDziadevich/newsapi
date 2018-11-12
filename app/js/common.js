// var url = 'https://newsapi.org/v2/top-headlines?' +
//     'country=us&' +
//     'apiKey=eabd967104da4e07a9c41b1342a889b1';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     });
//
// // news channel
// var url = 'https://newsapi.org/v2/sources?' +
//     'apiKey=eabd967104da4e07a9c41b1342a889b1';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     });

// -------------------------------------------------------------

//import articleRender from './articleCard.js';

let newsContainer = 'news-container',
    newsApiKey = 'eabd967104da4e07a9c41b1342a889b1',
    newsSrc = 'bbc-news',
    newsLimit = 10;

let urlNews = `https://newsapi.org/v2/top-headlines?sources=${newsSrc}&apiKey=${newsApiKey}`;

fetch(new Request(urlNews))
    .then(response =>  {
        response.json().then(news => { renderNews(newsContainer, news) } );
    });


function renderNews(elemId, news) {
    let elem = document.getElementById(elemId);
    if (elem && news.status == 'ok') {
        elem.innerHTML = news.articles
            .map(a => '<li class="col-xs-12 col-lg-10 col-xl-8">' + render(a) + '</li>')
            .reduce((txt, li) => txt + li, '<ul class="articles row">') + '</ul>';
    }
}
//
// function render(article) {
//     return `<div class="card">
//           <img class="card-img-top w-100" src="${article.urlToImage}" alt="${article.title}">
//           <div class="card-block">
//             <h4 class="card-title">${article.title}</h4>
//             <p class="text-muted small">${(new Date(article.publishedAt)).toLocaleString()}</p>
//             <p class="card-text">${article.description}</p>
//             <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
//           </div>
//         </div>`;
// }


document.querySelector('.select-channel ul').addEventListener('click', function(e){

    let menuList = document.querySelectorAll(".select-channel ul li");
    menuList.forEach(function(item) {
        item.classList.remove("active");
    });

    var newsSrc  = e.target.id;

    e.target.classList.add("active");

    urlNews = `https://newsapi.org/v2/top-headlines?sources=${newsSrc}&apiKey=${newsApiKey}`;

    fetch(new Request(urlNews))
        .then(response =>  {
            response.json().then(news => { renderNews(newsContainer, news) } );
        });
});

