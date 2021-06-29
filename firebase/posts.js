import { db } from '../firebase';

const errorLine = 'No account storage located';

function postNewTemplate(user, templateList, title) {
  const userTemplateDB = db.collection('users').doc(user).collection('template');

  if (userTemplateDB) {
    userTemplateDB.doc(`${title}`).set(templateList)
    .then( () => {
      console.log('template set');
      console.log(title);
      console.log(templateList);
    })
    .catch( (error) => {
      console.log(error);
    });
  } else {
    console.log();
  }
}

function postNewItem(user, databaseName, itemName, fields) {
  const userItemDB = db.collection('users').doc(user).collection(databaseName);

  if (userItemDB) {
    userItemDB.doc(`${itemName}`).set({ fields })
      .then(() => {
        console.log('new item added');
        console.log(itemName);
        console.log(fields);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log(errorLine);
  }
}


function postNewNotes(user, notesName, content) {
  const userNotesDB = db.collection('users').doc(user).collection('Notes')

  if (userNotesDB && notesName !== '' || null || undefined || ' ' && content !== '' || null || undefined || ' ' ) {
    userNotesDB.doc(`${notesName}`).set({ content })
      .then(() => {
        console.log(notesName, { content })
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    console.log(errorLine)
  }
}





export { postNewTemplate, postNewItem, postNewNotes };