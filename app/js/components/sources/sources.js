export default class Sources{
  renderSources(elemId, sources) {
    let elem = elemId;
    if (elem && sources.status == 'ok') {
      elem.innerHTML = sources.sources
        .reduce((txt, li) => txt + `<li class="col-xs-6 col-sm-6 col-lg-3 col-xl-3" data-sourceid='${li.id}'>
        ${li.name}</li>`, `<ul class='row'>`) + '</ul>';
    }
  }
}