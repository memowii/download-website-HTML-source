const { program } = require("./setupCommander");
const setupColors = require("./setupColors");
const downloadPageSource = require("./downloadPageSource")

setupColors();
program.parse(process.argv);

const options = program.opts();

downloadPageSource(options);

// TEST CASES FROM CLI
// cl && node src/index.js                                                                ✓
// cl && node src/index.js -u                                                             ✓
// cl && node src/index.js -u https//forbes                                               ✓
// cl && node src/index.js -u https://www.forbes.com.mx                                   ✓
// cl && node src/index.js -u https://www.forbes.com.mx -p path source.html               ✓
// cl && node src/index.js -u https://www.forbes.com.mx -p path /home/memowii/source.html

// /home/memowii/source.html, ../afile.html
