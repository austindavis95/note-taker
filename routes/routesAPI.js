const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {notes}  = require('../data/db.json');
const path = require('path');
const {createNewNote} = require('../lib/notes');

//route to post to database
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

//route to post to server
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);

});


module.exports = router;
