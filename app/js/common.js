const newsContainer = document.getElementById('news-container');

function renderNews(elemId, news) {
  let elem = elemId;
  if (elem && news.status == 'ok') {
    elem.innerHTML = news.articles.reduce((txt, li) => txt + `<li class='col-xs-12 col-sm-12 col-lg-6 col-xl-6'>${render(li)}</li>`, `<ul class="articles row">`) + `</ul>`;
  }
}

