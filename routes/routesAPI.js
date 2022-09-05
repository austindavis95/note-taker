let fs = require('fs');
let router = require('express').Router();
let notes  = require('../data/notes.json');
let path = require('path');

//route to post to database
router.get('/notes', (req, res) => {
    res.json(notes);
});

//route to post to server
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
    
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notes)
    );
});

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
};
module.exports = router;
