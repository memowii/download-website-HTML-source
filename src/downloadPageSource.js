const { isWebUri } = require('valid-url');
const { get } = require('axios');
const saveDataToHTMLFile = require('./saveDataToHTMLFile');

const downloadPageSource = async ({ uri, path }) => {
  if (!isWebUri(uri)) {
    throw new Error('The entered uri is not a well-formed HTTP or HTTPS uri.');
  }

  let HTMLData, host;

  try {
    const { status, data } = await get(uri);
    if (status === 200) {
      HTMLData = data;
      host = new URL(uri).host;
    }
  } catch (error) {
    throw new Error(
      `Something went wrong while fetching the web page: ${error.message}`
    );
  }

  saveDataToHTMLFile(path, host, HTMLData);
};

module.exports = downloadPageSource;
