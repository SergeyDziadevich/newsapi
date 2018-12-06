import {createElement} from '../../create-element';
import './load-button.scss';

const loadButton = createElement('button', {
    innerHTML: 'Show News',
    className: ['btn', 'btn-danger', 'btn-shownews']
  }
);

loadButton.addEventListener('click', loadNews);

const body = document.querySelector('body');
body.appendChild(loadButton);

async function loadNews() {
  await import('../../common');

  body.removeChild(loadButton);
}
