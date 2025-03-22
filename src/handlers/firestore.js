import { db } from "../lib/firebase.config";
import {
  setDoc,
  serverTimestamp,
  doc,
  collection,
  getDocs,
} from "firebase/firestore";

const Firestore = {
  readDocs: (...args) => {
    const [collection_name] = args;
    let docs = [];
    const ref = collection(db, collection_name);
    return new Promise(async (resolve) => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const d = { ...doc.data() };
          docs.push(d);
        });
        resolve(docs);
      } catch (e) {
        console.log(e);
      }
    });
  },
  writeDoc: (...args) => {
    const [inputs, collection_name] = args;
    return new Promise(async (resolve) => {
      const randomIndex = Math.floor(Math.random() * 1000000);
      try {
        const docRef = doc(db, collection_name, `${randomIndex}`);
        await setDoc(docRef, {
          title: inputs.title,
          path: inputs.path,
          createdAt: serverTimestamp(),
          user: inputs.user,
        });
        resolve("New doc inserted successfully");
      } catch (e) {}
    });
  },
};
export default Firestore;
