import { db } from '../firebase';

const errorLine = 'Unable to delete: No account storage located';

//Delete notes from firebase based off of Title (id)
function deleteNotes(user, databaseName) {
    const userNotesDB = db.collection('users').doc(user).collection('Notes')

    userNotesDB.doc(`${databaseName}`).delete().then(() => {
        console.log('Notes successfully deleted')
    }).catch((err) => {
        console.log(err)
    })
}


export {deleteNotes}