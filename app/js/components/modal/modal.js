import {createElement} from '../../create-element';
import './modal.scss';

let errorElement;

const createErrorElement = () => {
  const error = createElement('div', {
    className: ['error']
  });
  const wrapper = createElement('div', {
    className: ['error-wrapper']
  });
  const errorTitle = createElement('h2', {
    innerHTML: 'Too many results',
    className: ['error-title']
  });
  const closeButton = createElement('button', {
    innerHTML: 'close',
    className: ['btn', 'btn-secondary']
  }, );

  closeButton.addEventListener('click', () => error.remove());
  wrapper.appendChild(errorTitle);
  wrapper.appendChild(closeButton);
  error.appendChild(wrapper);

  return error;
};

//Singleton Pattern: create new or return existing
export default errorElement || createErrorElement();