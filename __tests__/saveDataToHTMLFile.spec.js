const saveDataToHTMLFile = require('../src/saveDataToHTMLFile');
const fs = require('fs');
const setupColors = require('../src/setupColors');

const createEmptyFile = (filePath) => fs.closeSync(fs.openSync(filePath, 'w'));

setupColors();

describe('saveDataToHTMLFile function', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  const uri = 'http://example.com/';

  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('it should save without a path argument.', () => {
    const path = undefined,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`),
      cratedFile = 'example.com.html';

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(cratedFile).isFile()).toBe(true);

    fs.unlinkSync(cratedFile);
  });

  test('it should try to save, but a file with that name already exists.', () => {
    const path = undefined,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`),
      fileName = 'example.com.html';

    createEmptyFile(fileName);

    saveDataToHTMLFile(path, host, data);

    expect(console.error).toBeCalledTimes(1);
    expect(console.error).toHaveBeenLastCalledWith(
      `ERROR: The file ${fileName} already exists.`.error
    );

    fs.unlinkSync(fileName);
  });
});
