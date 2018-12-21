import '../scss/main.scss';

import SelectCategories from './components/select-categories/select-categories';
import News from './components/news/news';
import Sources from './components/sources/sources';
import {LogApi} from './proxy';

const sourcesContainer = document.querySelector('#news-sources');
const newsContainer = document.getElementById('news-container');
const compCategories = new SelectCategories();
const compSources = new Sources();
const compNews = new News();

compCategories.create();

document.querySelector('.sel-cat').addEventListener('change', e => {
  let selectedCategory = e.target.value;

  async function getSource(){

    let requestApi = LogApi.create('getsources', selectedCategory);
    let sources = await requestApi.getApi();

    compSources.renderSources(sourcesContainer, sources);

    sourcesListener();
  }
  getSource();
});

function sourcesListener() {
  document.querySelector('#news-sources ul').addEventListener('click', e => {

    let menuList = document.querySelectorAll("#news-sources ul li");
    menuList.forEach(item => {
      item.classList.remove('active');
    });

    let newsSrc = e.target.getAttribute('data-sourceid');

    e.target.classList.add('active');

    async function getNews(){
      try {
        let requestApi = LogApi.create('getnews', newsSrc);
        let news = await requestApi.getApi();


        //simulate error if news in source > 10
        if(news.totalResults >= 11){
          throw new Error('too many results');
        }

        compNews.renderNews(newsContainer, news);

      } catch (err) {

        console.log(err.message);

        //Lazy Initialization
        import( './components/modal/modal').then(
          ({ default: errorElement }) => { document.body.appendChild(errorElement); }
        );
      }
    }
    getNews();
  });
}
