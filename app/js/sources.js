import ResponseApi from './api';
import {renderNews} from './news';
import {newCategories, sourcesContainer, newsContainer} from './common.js';

let htmlSelect = `
  <select class="form-control sel-cat" id="cat_val" name="cat-select">
    ${newCategories.reduce((allOpt, opt) => allOpt + `<option value="${opt}">${opt}</option>`, `<option value="0">Select news category:</option>`)}
  </select>`;

document.getElementById('news-categories').innerHTML = htmlSelect;

document.querySelector('.sel-cat').addEventListener('change', e => {
  let selectedCategory = e.target.value;

  ResponseApi.getSourcesOnCategory(selectedCategory)
    .then(sources => {
      renderSources(sourcesContainer, sources);
    });
});

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

      ResponseApi.getNewsOnSource(newsSrc)
        .then(news => {
          renderNews(newsContainer, news);
        });
    });
  }
}