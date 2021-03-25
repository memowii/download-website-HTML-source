const downloadPageSource = require('../src/downloadPageSource');

describe('downloadPageSource function', () => {
  test('should throw when uri is incorrect', async () => {
    expect.assertions(1);

    const options = { uri: 'https//forbes' };
    const errorMessage =
      'The entered uri is not a well-formed HTTP or HTTPS uri.';

    try {
      await downloadPageSource(options);
    } catch ({ message }) {
      expect(message).toBe(errorMessage);
    }
  });

  test('should throw when failing to download website data', async () => {
    expect.assertions(1);

    const options = { uri: 'https://www.forbes.com.ml' };
    const errorMessage =
      'Something went wrong while fetching the web page: Network Error';

    try {
      await downloadPageSource(options);
    } catch ({ message }) {
      expect(message).toBe(errorMessage);
    }
  });
});
