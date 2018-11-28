function renderNews(elemId, news) {
  let elem = elemId;
  if (elem && news.status == 'ok') {
    elem.innerHTML = news.articles.reduce((txt, li) => txt + `<li class='col-xs-12 col-sm-12 col-lg-6 col-xl-6'>${render(li)}</li>`, `<ul class="articles row">`) + `</ul>`;
  }
}

function render(article) {
  return `<div class="card">
          <img class="card-img-top w-100" src="${article.urlToImage}" alt="${article.title}">
          <div class="card-block">
            <h4 class="card-title">${article.title}</h4>
            <p class="text-muted small">${(new Date(article.publishedAt)).toLocaleString()}</p>
            <p class="card-text">${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
          </div>
        </div>`;
}

export {renderNews}