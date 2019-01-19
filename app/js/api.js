const ApiKey = 'eabd967104da4e07a9c41b1342a889b1';
const Host = 'https://newsapi.org/v2';

export class FactoryApi{

  static create(type, param) {

  let requestApi;

  this.type = type;
  if (type === 'getsources') {
    requestApi = new Getsources(param);
    this.url = requestApi.url;
  } else if (type === 'getnews') {
    requestApi = new GetNews(param);
    this.url = requestApi.url;
  }

  requestApi = Object.assign(requestApi, getRequest);

  return requestApi;
  }
}

const Getsources = function (param) {
  this.url = `${Host}/sources?category=${param}&apiKey=${ApiKey}`;
};

const GetNews = function (param) {
  this.url = `${Host}/top-headlines?sources=${param}&apiKey=${ApiKey}`;
};

const getRequest = {
  async getApi() {
    return fetch(this.url).then(response => response.json());
  }
};

