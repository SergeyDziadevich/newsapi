const newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export default class SelectCategories {
  create() {
    let htmlSelectCategories = `
    <select class="form-control sel-cat" id="cat_val" name="cat-select">
      ${newCategories.reduce((allOpt, opt) => allOpt + `<option value="${opt}">${opt}</option>`,
      `<option value="0">Select news category:</option>`)}
    </select>`;

    document.getElementById('news-categories').innerHTML = htmlSelectCategories;
  }
}