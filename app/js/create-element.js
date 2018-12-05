const createElement = (tag, {
  href,
  innerHTML,
  dataset,
  className
} = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML || '';
  element.href = href;

  if (className) {
    className.forEach(item => element.classList.add(item));
  }

  if (dataset) {
    for (const key in dataset) {
      element.dataset[key] = dataset[key];
    }
  }
  return element;
};

export {createElement}