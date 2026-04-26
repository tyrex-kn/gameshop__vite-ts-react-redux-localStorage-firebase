import { addDoc, collection, Firestore } from "firebase/firestore";
import type { Collection } from "../../types";

async function AddFiresoreData<T extends object> (db:Firestore, coll:Collection, data:T){
    try{
        const docRef = await addDoc(collection(db, coll), data)
        return docRef.id
    }catch(e){
        console.log(`error adding data for ${coll}`, e);
    }
}

export default AddFiresoreData;