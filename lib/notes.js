const fs = require('fs');
const path = require('path');

function updateNote(id, notesArray){
    const deletedNote = id ;
    for(let i = 0; i < notesArray.length; i++){
        if (deletedNote===notesArray[i].id){
            notesArray.splice(i,1);
            fs.writeFileSync(
                path.join(__dirname, '../data/db.js'),
                JSON.stringify({
                    notes: notesArray
                }, null, 2), err =>{
                    if(err){
                        throw err;
                    }
                }
            )
        }
    }
}


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
    updateNote,
};