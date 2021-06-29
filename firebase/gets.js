import { db } from '../firebase';


function getAllItems(user, collection) {
  const dbCollection = db.collection('users').doc(user).collection(collection);
  return dbCollection.get();
}

export { getAllItems };