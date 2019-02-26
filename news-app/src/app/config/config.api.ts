const API_KEY = '&apiKey=eabd967104da4e07a9c41b1342a889b1';
const HOST = 'https://newsapi.org/v2';
const LOCAL_HOST = 'http://localhost:3000/news';

const SOURCES = `${HOST}sources?${API_KEY}`;
const NEWS = `${LOCAL_HOST}everything?${API_KEY}`;

export {
  API_KEY,
  HOST,
  LOCAL_HOST,
  SOURCES,
  NEWS,
};
