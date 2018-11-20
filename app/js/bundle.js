"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var apiKey = 'eabd967104da4e07a9c41b1342a889b1';
var host = 'https://newsapi.org/v2';

var NewsApi =
/*#__PURE__*/
function () {
  function NewsApi() {
    _classCallCheck(this, NewsApi);
  }

  _createClass(NewsApi, null, [{
    key: "getSourcesOnCategory",
    value: function getSourcesOnCategory(category) {
      var url = "".concat(host, "/sources?category=").concat(category, "&apiKey=").concat(apiKey);
      return fetch(url).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: "getNewsOnSource",
    value: function getNewsOnSource(source) {
      var url = "".concat(host, "/top-headlines?sources=").concat(source, "&apiKey=").concat(apiKey);
      return fetch(url).then(function (response) {
        return response.json();
      });
    }
  }]);

  return NewsApi;
}();

exports.default = NewsApi;
"use strict";

var newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
var sourcesContainer = document.querySelector('#news-sources');
var newsContainer = document.getElementById('news-container'); //export {newCategories, sourcesContainer, newsContainer}
"use strict";

function renderNews(elemId, news) {
  var elem = elemId;

  if (elem && news.status == 'ok') {
    elem.innerHTML = news.articles.reduce(function (txt, li) {
      return txt + "<li class='col-xs-12 col-sm-12 col-lg-6 col-xl-6'>".concat(render(li), "</li>");
    }, "<ul class=\"articles row\">") + "</ul>";
  }
}

function render(article) {
  return "<div class=\"card\">\n          <img class=\"card-img-top w-100\" src=\"".concat(article.urlToImage, "\" alt=\"").concat(article.title, "\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">").concat(article.title, "</h4>\n            <p class=\"text-muted small\">").concat(new Date(article.publishedAt).toLocaleString(), "</p>\n            <p class=\"card-text\">").concat(article.description, "</p>\n            <a href=\"").concat(article.url, "\" target=\"_blank\" class=\"btn btn-primary\">Read more</a>\n          </div>\n        </div>");
} //export{renderNews}
"use strict";

var newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
var sourcesContainer = document.querySelector('#news-sources');
var newsContainer = document.getElementById('news-container'); //export {newCategories, sourcesContainer, newsContainer}
"use strict";

var newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
var sourcesContainer = document.querySelector('#news-sources');
var newsContainer = document.getElementById('news-container'); //export {newCategories, sourcesContainer, newsContainer}
"use strict";

// import ResponseApi from './api';
// import {renderNews} from './news';
// import {newCategories, sourcesContainer, newsContainer} from './common.js';
var htmlSelect = "\n  <select class=\"form-control sel-cat\" id=\"cat_val\" name=\"cat-select\">\n    ".concat(newCategories.reduce(function (allOpt, opt) {
  return allOpt + "<option value=\"".concat(opt, "\">").concat(opt, "</option>");
}, "<option value=\"0\">Select news category:</option>"), "\n  </select>");
document.getElementById('news-categories').innerHTML = htmlSelect;
document.querySelector('.sel-cat').addEventListener('change', function (e) {
  var selectedCategory = e.target.value;
  NewsApi.getSourcesOnCategory(selectedCategory).then(function (sources) {
    renderSources(sourcesContainer, sources);
  });
});

function renderSources(elemId, sources) {
  var elem = elemId;

  if (elem && sources.status == 'ok') {
    elem.innerHTML = sources.sources.reduce(function (txt, li) {
      return txt + "<li class=\"col-xs-6 col-sm-6 col-lg-3 col-xl-3\" data-sourceid='".concat(li.id, "'>").concat(li.name, "</li>");
    }, "<ul class='row'>") + '</ul>';
    document.querySelector('#news-sources ul').addEventListener('click', function (e) {
      var menuList = document.querySelectorAll("#news-sources ul li");
      menuList.forEach(function (item) {
        item.classList.remove('active');
      });
      var newsSrc = e.target.getAttribute('data-sourceid');
      e.target.classList.add('active');
      NewsApi.getNewsOnSource(newsSrc).then(function (news) {
        renderNews(newsContainer, news);
      });
    });
  }
}
