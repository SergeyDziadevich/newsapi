const newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const sourcesContainer = document.querySelector('#news-sources');

let htmlSelect = '<select class="form-control sel-cat" id="cat_val" name="cat-select">';
htmlSelect += '<option value="0">Select news category:</option>';
newCategories.forEach(value => {
  htmlSelect += `<option value="${value}">${value}</option>`;
});
htmlSelect += '</select>';

document.getElementById("news-categories").innerHTML = htmlSelect;

document.querySelector('.sel-cat').addEventListener('change', function (e) {
  let selectedCategory = this.value;

  let urlNews = `https://newsapi.org/v2/sources?category=${selectedCategory}&apiKey=${newsApiKey}`;

  fetch(new Request(urlNews))
    .then(response => {
      response.json().then(sources => {
        console.log(sources);
        renderSources(sourcesContainer, sources);
      });
    });
});

