#!/usr/bin/env node
const log = console.log;

const meow = require("meow");

const chalk = require("chalk");

const {
  Library
} = require("library-genesis");
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

if (c.input.length === 1) {
  log(`Correct length`);
} else {
  log(`I'm having difficult parsing your request. \n 
     Please type something like the following: \n 
    ${chalk.green("libgen")} ${chalk.blue("./relative/path/to/config.js")}
  `);
}
//# sourceMappingURL=cli.js.map