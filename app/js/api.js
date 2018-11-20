const apiKey = 'eabd967104da4e07a9c41b1342a889b1';
const host = 'https://newsapi.org/v2';

export default class NewsApi{
  static getSourcesOnCategory(category){
    const url = `${host}/sources?category=${category}&apiKey=${apiKey}`;
    return fetch(url).then(response => response.json());
  }

  static getNewsOnSource(source){
    const url = `${host}/top-headlines?sources=${source}&apiKey=${apiKey}`;
    return fetch(url).then(response => response.json());
  }
}

