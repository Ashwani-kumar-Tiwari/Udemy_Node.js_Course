//const fs = require("fs");
//fs.writeFileSync("notes.txt", "This file is created by node.js");
//fs.appendFileSync("notes.txt", "\nThis text is appended in the file.");

//const name = require("./utilis.js");
//const name = "Ashwani Kumar Tiwari";
// const add = require("./utilis.js");
// const sum = add(4, 4);
// console.log(sum);

// const str = require("./notes.js");
// console.log(str());

// const validator = require("validator");
// console.log(validator.isEmail("foo@bar"));

// const chalk = require("chalk");
// console.log(chalk.red.bold("Hello world!"));

// const log = console.log;
// log(chalk.blue("Hello") + " World" + chalk.red("!"));
// log(chalk.blue.bgRed.bold("Hello world!"));
// log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));
// log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));
// log(
//   chalk.green(
//     "I am a green line " +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// );

// log(`
// CPU: ${chalk.red("90%")}
// RAM: ${chalk.green("40%")}
// DISK: ${chalk.yellow("70%")}
// `);
//=====================================================================
const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//console.log(yargs.argv);
yargs.parse();
