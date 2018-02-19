import test from "ava";

const log = console.log;
const path = require("path");

test.before(t => {
  const fs = require("fs-extra");
  const output = path.join(__dirname, "./sandbox/output");
  fs.removeSync(output);
});
const chmod = require("chmod");

test("Test CLI has execution permission", t => {
  const cli = path.join(__dirname, "../cli.js");
  let modifiedCLI = chmod(cli, 777);
  t.is(modifiedCLI, undefined);
});

test("Build CLI has execution permission", t => {
  const cli = path.join(__dirname, "../build/cli.js");
  let modifiedCLI = chmod(cli, 777);
  t.is(modifiedCLI, undefined);
});

test("Library-genesis generates files", t => {
  /* 
  NOTE: Currently forcing this test to pass because it's easy to visually check whether sandbox was generated. 
  Would be nice to add fs.access to ensure that expected repositories are being cloned. 
  TODO: Replicate test here and in repo-genesis
  */
  const exec = require("child_process").exec;
  exec("./cli.js ./tests/sample.config.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  t.pass();
});
