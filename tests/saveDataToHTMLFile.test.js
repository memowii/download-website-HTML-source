const saveDataToHTMLFile = require('../src/saveDataToHTMLFile');
const fs = require('fs');

const createEmptyFile = (filePath) => fs.closeSync(fs.openSync(filePath, 'w'));

describe('saveDataToHTMLFile function', () => {
  const uri = 'http://example.com/';

  test('should save data with an undefined path argument', () => {
    const path = undefined,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`),
      cratedFile = 'example.com.html';

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(cratedFile).isFile()).toBe(true);

    fs.unlinkSync(cratedFile);
  });

  test('should throw because a file with that name already exists.', () => {
    const path = undefined,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`),
      fileName = 'example.com.html',
      errorMessage = `The file ${fileName} already exists.`;

    createEmptyFile(fileName);

    try {
      saveDataToHTMLFile(path, host, data);
    } catch ({ message }) {
      expect(message).toBe(errorMessage);
    }

    fs.unlinkSync(fileName);
  });

  test('should throw because the file extension is wrong.', () => {
    const path = 'source.htmx',
      host = undefined,
      data = undefined,
      errorMessage = "The file's extension must be .html.";

    try {
      saveDataToHTMLFile(path, host, data);
    } catch ({ message }) {
      expect(message).toBe(errorMessage);
    }
  });

  test('should save the data to a given path (name).', () => {
    const path = 'source.html',
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`);

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(path).isFile()).toBe(true);

    fs.unlinkSync(path);
  });

  test('should save the data to a given absolute path.', () => {
    const path = `${__dirname}/source.html`,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`);

    saveDataToHTMLFile(path, host, data);

    expect(fs.lstatSync(path).isFile()).toBe(true);

    fs.unlinkSync(path);
  });

  test('should throw because the file extension, of the absolute path, is wrong.', () => {
    const path = `${__dirname}/source.htmx`,
      host = undefined,
      data = undefined,
      errorMessage = "The file's extension must be .html.";

    try {
      saveDataToHTMLFile(path, host, data);
    } catch ({ message }) {
      expect(message).toBe(errorMessage);
    }
  });

  test('should throw because a similar absolute path already exists.', () => {
    const path = `${__dirname}/example.com.html`,
      { host } = new URL(uri),
      data = fs.readFileSync(`${__dirname}/example.html`),
      fileName = 'example.com.html',
      alreadyCreatedPath = `${__dirname}/${fileName}`,
      errorMessage = `The file ${fileName} already exists.`;

    createEmptyFile(alreadyCreatedPath);

    try {
      saveDataToHTMLFile(path, host, data);
    } catch ({ message }) {
      expect(message).toBe(errorMessage);
    }

    fs.unlinkSync(alreadyCreatedPath);
  });
});
