const saveDataToHTMLFile = require('../saveDataToHTMLFile');
const fs = require('fs');

describe('saveDataToHTMLFile function', () => {
  test('it should', () => {
    const path = undefined,
      host = 'example.com',
      data = fs.readFileSync(`${__dirname}/example.html`),
      cratedFile = 'example.com.html';

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(cratedFile).isFile()).toBe(true);
  });
});
