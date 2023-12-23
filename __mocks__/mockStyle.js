// styleMock.js
module.exports = new Proxy({}, {
    get: (target, key) => key,
  });
  