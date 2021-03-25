const fs = require('fs');

const saveDataToHTMLFile = (path, host, data) => {
  if (!path) {
    const fileName = `${host}.html`;

    if (fs.existsSync(fileName)) {
      throw new Error(`The file ${fileName} already exists.`);
    }

    fs.writeFileSync(fileName, data);

    return;
  }

  if (path.startsWith('/') || path.startsWith('../')) {
    const splitPath = path.split('/');
    const fileName = splitPath[splitPath.length - 1];

    if (!fileName.endsWith('.html')) {
      throw new Error("The file's extension must be .html.");
    }

    if (fs.existsSync(path)) {
      throw new Error(`The file ${fileName} already exists.`);
    }

    fs.writeFileSync(path, data);
  } else {
    if (!path.endsWith('.html')) {
      throw new Error("The file's extension must be .html.");
    }

    fs.writeFileSync(path, data);
  }
};

module.exports = saveDataToHTMLFile;
