const Note = require("../model/noteModel");

async function getNotes(req, res) {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getNotesById(req, res) {
  try {
    const note = await Note.findById(req.params.id).exec();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createNotes(req, res) {
  try {
    const newnNote = new Note({
      name: req.body.name,
      note: req.body.note,
    });

    const note = await newnNote.save();
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateNotes(req, res) {
  if (req.body.name !== null) {
    res.note.name = req.body.name;
  }
  if (req.body.note !== null) {
    res.note.note = req.body.note;
  }
  try {
    const updatedNote = await res.note.save();
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteNote(req, res) {
  try {
    await req.note.deleteOne();
    res.json({ message: "deleted the note and the user" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getNote(req, res, next) {
  try {
    const note = await Note.findById(req.params.id).exec();
    if (note === null) {
      res.status(404).json({ message: error.message });
    }
    res.note = note;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getNotes,
  getNotesById,
  createNotes,
  updateNotes,
  deleteNote,
  getNote,
};
