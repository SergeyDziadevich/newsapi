const newsContainer = document.getElementById('news-container'),
  newsApiKey = 'eabd967104da4e07a9c41b1342a889b1';

function renderNews(elemId, news) {
  let elem = elemId;
  if (elem && news.status == 'ok') {
    elem.innerHTML = news.articles
      .map(a => '<li class="col-xs-12 col-sm-12 col-lg-6 col-xl-6">' + render(a) + '</li>')
      .reduce((txt, li) => txt + li, '<ul class="articles row">') + '</ul>';
  }
}

