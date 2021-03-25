const { isWebUri } = require('valid-url');
const { get } = require('axios');
const saveDataToHTMLFile = require('./saveDataToHTMLFile');

const downloadPageSource = async ({ uri, path }) => {
  if (!isWebUri(uri)) {
    throw new Error('The entered uri is not a well-formed HTTP or HTTPS uri.');
  }

  try {
    const { status, data } = await get(uri);
    if (status === 200) {
      const { host } = new URL(uri);
      saveDataToHTMLFile(path, host, data);
    }
  } catch ({ message }) {
    throw new Error(
      `Something went wrong while fetching the web page: ${message}`
    );
  }
};

module.exports = downloadPageSource;
