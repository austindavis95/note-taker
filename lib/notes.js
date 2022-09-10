const fs = require('fs');
const path = require('path');




function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    );

    return newNote;

};
module.exports = {
    createNewNote,

};