const fs = require('fs');

const saveDataToHTMLFile = (path, host, data) => {
  if (!path) {
    const fileName = `${host}.html`;

    if (fs.existsSync(fileName)) {
      throw new Error(`The file ${fileName} already exists.`);
    }

    fs.writeFileSync(fileName, data);
  } else {
    if (!path.startsWith('/') || !path.startsWith('../')) {
      if (!path.endsWith('.html')) {
        throw new Error("The file's extension must be .html.");
      }

      fs.writeFileSync(path, data);
    }
  }
};

module.exports = saveDataToHTMLFile;

// console.log(__dirname);
// console.log(fs.lstatSync(__dirname+"/"+"../somefile.txt").isFile());
// console.log(path.split("/"));
