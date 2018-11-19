const newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const sourcesContainer = document.querySelector('#news-sources');

let htmlSelect = `
  <select class="form-control sel-cat" id="cat_val" name="cat-select">
    ${newCategories.reduce((allOpt, opt) => allOpt + `<option value="${opt}">${opt}</option>`, `<option value="0">Select news category:</option>`)}
  </select>`;

document.getElementById('news-categories').innerHTML = htmlSelect;

document.querySelector('.sel-cat').addEventListener('change', e => {
  let selectedCategory = e.target.value;

  let urlNews = `https://newsapi.org/v2/sources?category=${selectedCategory}&apiKey=${newsApiKey}`;

  fetch(new Request(urlNews))
    .then(response =>  response.json())
    .then(sources => {
      renderSources(sourcesContainer, sources);
    });
});

