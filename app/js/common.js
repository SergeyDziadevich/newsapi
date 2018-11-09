var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=eabd967104da4e07a9c41b1342a889b1';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })