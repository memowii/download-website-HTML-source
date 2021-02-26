const fs = require('fs');

const saveDataToHTMLFile = (path, host, data) => {
  if (!path) {
    fs.writeFileSync(`${host}.html`, data);
  } else {
    if (!path.startsWith('/') || !path.startsWith('../')) {
      // file.html
      if (!path.endsWith('.html')) {
        console.log('ERROR: The name of your file should end with extension .html.'.error);
        process.exit(1);
      }

      fs.writeFileSync(path, data);
    }
  }
};

module.exports = saveDataToHTMLFile;

// console.log(__dirname);
// console.log(fs.lstatSync(__dirname+"/"+"../somefile.txt").isFile());
// console.log(path.split("/"));
// process.exit(0);

// path, hostname
