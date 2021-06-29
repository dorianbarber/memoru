import { db } from '../firebase';


function getAllItems(user, collection) {
  const dbCollection = db.collection('users').doc(user).collection(collection);
  return dbCollection.get();
}

function getAllTemplates(user) {
  const dbCollection = db.collection('users').doc(user).collection('template');
  return dbCollection.get();
}

export { getAllItems, getAllTemplates };