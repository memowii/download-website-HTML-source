const { program } = require("./setupCommander");
const setupColors = require("./setupColors");
const downloadPageSource = require("./downloadPageSource")

setupColors();
program.parse(process.argv);

const options = program.opts();

downloadPageSource(options);

// cl && node index.js                                                    ✓
// cl && node index.js -u                                                 ✓
// cl && node index.js -u https//forbes                                   ✓
// cl && node index.js -u https://www.forbes.com.mx                       ✓
// cl && node index.js -u https://www.forbes.com.mx -p path source.html
// /home/memowii/source.html, ../afile.html
