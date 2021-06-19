import { db } from '../firebase';

function postNewTemplate( user, templateList, title) {
  const userTemplateDB = db.collection('users').doc(user).collection('template');

  if (userTemplateDB) {
    userTemplateDB.doc(`${title}`).set({templateList})
    .then( () => {
      console.log('template set');
      console.log(title);
      console.log(templateList);
    })
    .catch( (error) => {
      console.log(error);
    })
  } else {
    console.log('No account storage located');
  }
}


export default postNewTemplate;