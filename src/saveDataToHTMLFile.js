const fs = require('fs');

const saveDataToHTMLFile = (path, host, data) => {
  if (!path) {
    const fileName = `${host}.html`;

    if (fs.existsSync(fileName)) {
      console.error(`ERROR: The file ${fileName} already exists.`.error);
      return;
    }

    fs.writeFileSync(fileName, data);
  } else {
    if (!path.startsWith('/') || !path.startsWith('../')) {
      if (!path.endsWith('.html')) {
        console.error("The file's extension must be .html.".error);
        return;
      }

      fs.writeFileSync(path, data);
    }
  }
};

module.exports = saveDataToHTMLFile;

// console.log(__dirname);
// console.log(fs.lstatSync(__dirname+"/"+"../somefile.txt").isFile());
// console.log(path.split("/"));
