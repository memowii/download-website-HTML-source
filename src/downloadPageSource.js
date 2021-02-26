const validUrl = require("valid-url");
const axios = require("axios");
const saveDataToHTMLFile = require("./saveDataToHTMLFile");

const downloadPageSource = ({ uri, path }) => {
  if (!validUrl.isWebUri(uri)) {
    console.log(
      "ERROR: The entered uri is not a well-formed HTTP or HTTPS uri.".error
    );
    process.exit(1);
  }

  axios
    .get(uri)
    .then(({ status, data }) => {
      if (status === 200) {
        const { host } = new URL(uri);
        saveDataToHTMLFile(path, host, data);
      }
    })
    .catch((error) => {
      console.log(`Error while fetching web page ${error.hostname}`.red);
      console.log(error.message.red);
    });  
};

module.exports = downloadPageSource;
