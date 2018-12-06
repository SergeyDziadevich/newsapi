const apiKey = 'eabd967104da4e07a9c41b1342a889b1';
const host = 'https://newsapi.org/v2';

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
  this.url = `${host}/sources?category=${param}&apiKey=${apiKey}`;
};

const GetNews = function (param) {
  this.url = `${host}/top-headlines?sources=${param}&apiKey=${apiKey}`;
};

const getRequest = {
  async getApi() {
    return fetch(this.url).then(response => response.json());
  }
};

// Proxy
export const LogApi = new Proxy(FactoryApi, {
  get(target, name, receiver) {
    return Reflect.get({
      create(type, param) {
        target.create(type, param);
        console.log(`Request type: ${target.type}`);
        console.log(`url address of API: ${target.url}`);
        return target.create(type, param);
      },
      getApi() {

        return target.getApi();
      },
    }, name, receiver);
  },
});