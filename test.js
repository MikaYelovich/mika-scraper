// test.js
const { TextCraftClient } = require('./dist/cjs/index.cjs.js');

console.log(typeof TextCraftClient); // Should be 'function' or 'object'

const client = new TextCraftClient();
client
  .generateImage({
    text: 'Hello, World!',
    text2: 'Hello, World!',
    text3: 'Hello, World!',
  })
  .then(console.log)
  .catch(console.error);
