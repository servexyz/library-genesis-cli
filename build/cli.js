#!/usr/bin/env node
const log = console.log;

const meow = require("meow");

const chalk = require("chalk");
/*

const { myLibConfig } = require("./path/to/my-config.js");
const { Library } = require("library-genesis");
Library(myLibConfig).generate();
*/


let c = meow(`
    Usage
        $ respace <input>

      Options
        --config, -c  Generate repospace from config

      Examples
        $ respace -config my-config.js
`);

function parse(configPath) {
  const path = require("path");

  const {
    Library
  } = require("library-genesis");

  let {
    config
  } = require(path.join(process.cwd(), configPath));

  try {
    Library(config).generate();
  } catch (err) {
    log(`Failed to generate library. ${chalk.red(err)}`);
  }
}

if (c.input.length === 1) {
  parse(c.input[0]);
} else {
  log(`${chalk.yellow("-----------------------------------------")}
I'm having difficult parsing your request. \n 
Please type something like the following: \n 
${chalk.green("libgen")} ${chalk.blue("./relative/path/to/config.js")}
${chalk.yellow("-----------------------------------------")}
  `);
}
//# sourceMappingURL=cli.js.map