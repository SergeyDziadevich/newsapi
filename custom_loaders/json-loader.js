module.exports = function(source) {
  const data = JSON.parse(source);
  const result = {};

  Object.keys(data).forEach(item => {
    if (typeof data[item] !== 'number') {
      result[item] = data[item];
    }
  });

  return JSON.stringify(result);
};