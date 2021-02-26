const colors = require("colors");

const setupColors = () =>
  colors.setTheme({
    info: "blue",
    warn: "yellow",
    success: "green",
    debug: "cyan",
    error: "red",
  });

module.exports = setupColors;
