function renderSources(elemId, sources) {
  let elem = elemId;
  if (elem && sources.status == 'ok') {
    elem.innerHTML = sources.sources
      .map(s => `<li class="col-xs-6 col-sm-6 col-lg-3 col-xl-3" data-sourceid='${s.id}'>${s.name}</li>`)
      .reduce((txt, li) => txt + li, '<ul class="row">') + '</ul>';

    document.querySelector('#news-sources ul').addEventListener('click', e => {

      let menuList = document.querySelectorAll("#news-sources ul li");
      menuList.forEach(item => {
        item.classList.remove('active');
      });

      let newsSrc = e.target.getAttribute('data-sourceid');

      e.target.classList.add('active');

      urlNews = `https://newsapi.org/v2/top-headlines?sources=${newsSrc}&apiKey=${newsApiKey}`;

      fetch(new Request(urlNews))
        .then(response => {
          response.json().then(news => {
            renderNews(newsContainer, news)
          });
        });
    });
  }
}

