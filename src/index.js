const { program } = require('./setupCommander');
const setupColors = require('./setupColors');
const downloadPageSource = require('./downloadPageSource');

setupColors();
program.parse(process.argv);

const options = program.opts();

downloadPageSource(options).catch(({ name, message, stack }) =>
  console.error(`${name}: ${message} ${''}`.red)
);
