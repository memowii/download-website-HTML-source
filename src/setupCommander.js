const { program } = require("commander");

program.version("0.0.1");
program
  .requiredOption("-u, --uri <type>", "URI to the resource to download. Usually, it is a website.")
  .option(
    "-p, --path <type>",
    'Path and name of the file where the HTML source code should be saved. This path should start from the root "/"'
  );

exports.program = program;
