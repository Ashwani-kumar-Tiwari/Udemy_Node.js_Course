const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

// add note
const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });

  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  debugger
  //if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New notes added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

// remove note
const removeNote = (title) => {
  const notes = loadNotes();

  // const notesToKeep = notes.filter(function (note) {
  //   return note.title !== title;
  // });

  const notesToKeep = notes.filter((note) => note.title !== title);

  saveNotes(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found"));
    saveNotes(notesToKeep);
  }
};

// otes list
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

// read note
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = (notes) => {
  const datajson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", datajson);
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};

// for debugging
// "node inspect" || "node --inspect-brk" 
// open chrome
// chrome://inspect
