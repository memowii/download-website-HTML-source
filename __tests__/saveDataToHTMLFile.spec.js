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

  test('should save with an undefined path argument', () => {
    const path = undefined,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`),
      cratedFile = 'example.com.html';

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(cratedFile).isFile()).toBe(true);

    fs.unlinkSync(cratedFile);
  });

  test('should save, but a file with that name already exists.', () => {
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

  test('should save, but the file extension is wrong.', () => {
    const path = 'source.htmx',
      host = undefined,
      data = undefined;

    saveDataToHTMLFile(path, host, data);

    expect(console.error).toBeCalledTimes(1);
    expect(console.error).toHaveBeenLastCalledWith(
      "The file's extension must be .html.".error
    );
  });

  test('should save the data to a given path (name).', () => {
    const path = 'source.html',
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`);

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(path).isFile()).toBe(true);

    fs.unlinkSync(path);
  });
});
