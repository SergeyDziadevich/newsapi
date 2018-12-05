const apiKey = 'eabd967104da4e07a9c41b1342a889b1';
const host = 'https://newsapi.org/v2';

export class FactoryApi{
  static create(type, param) {

    let requestApi;

    if (type === 'getsources') {
      requestApi = new Getsources(param);
    } else if (type === 'getnews') {
      requestApi = new GetNews(param);
    }

    requestApi = Object.assign(requestApi, getRequest);

    return requestApi;
  }
}

const Getsources = function (param) {
  this.url = `${host}/sources?category=${param}&apiKey=${apiKey}`;
};

const GetNews = function (param) {
  this.url = `${host}/top-headlines?sources=${param}&apiKey=${apiKey}`;
};

const getRequest = {
  async get() {
    return fetch(this.url).then(response => response.json());
  }
};