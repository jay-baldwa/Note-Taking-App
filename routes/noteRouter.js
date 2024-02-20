const express = require("express");
const router = express.Router();
const Note = require("../model/noteModel");
const {
  getNotes,
  getNotesById,
  createNotes,
  updateNotes,
  deleteNote,
  getNote,
} = require("../controllers/noteController");

router.get("/", getNotes);
router.get("/:id", getNotesById);
router.post("/", createNotes);
router.patch("/:id", getNote, updateNotes);
router.delete("/:id", getNote, deleteNote);

module.exports = router;
