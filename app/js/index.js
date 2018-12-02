import 'bootstrap/scss/bootstrap.scss';
import '../scss/btn-shownews.scss';

//import './test.json';

const body = document.querySelector('body');

const button = document.createElement('button');

button.textContent = 'Show News';
button.className = 'btn btn-danger btn-shownews';
button.addEventListener('click', loadNews);
body.appendChild(button);

async function loadNews() {
  await import('./common');

  const parent = button.parentElement;
  parent.removeChild(button);
}


