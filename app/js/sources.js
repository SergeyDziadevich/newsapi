import {LogApi} from './proxy';

import {renderNews} from "./news";

const newsContainer = document.getElementById('news-container');

function renderSources(elemId, sources) {
  let elem = elemId;
  if (elem && sources.status == 'ok') {
    elem.innerHTML = sources.sources
      .reduce((txt, li) => txt + `<li class="col-xs-6 col-sm-6 col-lg-3 col-xl-3" data-sourceid='${li.id}'>
        ${li.name}</li>`, `<ul class='row'>`) + '</ul>';

    document.querySelector('#news-sources ul').addEventListener('click', e => {

      let menuList = document.querySelectorAll("#news-sources ul li");
      menuList.forEach(item => {
        item.classList.remove('active');
      });

      let newsSrc = e.target.getAttribute('data-sourceid');

      e.target.classList.add('active');

      async function getNews(){
        try {
          // let requestApi = FactoryApi.create('getnews', newsSrc);
          // let news = await requestApi.getApi();
          let requestApi = LogApi.create('getnews', newsSrc);
          let news = await requestApi.getApi();

          //simulate error if news in source >= 10
          if(news.totalResults >= 10){
            throw new Error('too many results');
          }

          renderNews(newsContainer, news);

        } catch (err) {
          // const modalWindow = await import('./components/modal/modal');
          // document.body.appendChild(modalWindow);

          console.log(err.message);

          //Lazy Initialization
          import( './components/modal/modal').then(({
            default: errorElement
          }) => {
            document.body.appendChild(errorElement);
          });
        }
      }
      getNews();
    });
  }
}

export{renderSources}