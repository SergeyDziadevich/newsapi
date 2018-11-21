import {NewsApi} from "./api";
import {renderNews} from "./news";

const newsContainer = document.getElementById('news-container');

function renderSources(elemId, sources) {
  let elem = elemId;
  if (elem && sources.status == 'ok') {
    elem.innerHTML = sources.sources
      .reduce((txt, li) => txt + `<li class="col-xs-6 col-sm-6 col-lg-3 col-xl-3" data-sourceid='${li.id}'>${li.name}</li>`, `<ul class='row'>`) + '</ul>';

    document.querySelector('#news-sources ul').addEventListener('click', e => {

      let menuList = document.querySelectorAll("#news-sources ul li");
      menuList.forEach(item => {
        item.classList.remove('active');
      });

      let newsSrc = e.target.getAttribute('data-sourceid');

      e.target.classList.add('active');

      async function getNews(){
        let news = await NewsApi.getNewsOnSource(newsSrc);
        renderNews(newsContainer, news);
      }
      getNews();
    });
  }
}

export{renderSources}