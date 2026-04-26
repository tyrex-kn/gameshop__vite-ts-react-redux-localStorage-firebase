import { doc, deleteDoc } from "firebase/firestore";

import { db } from "..";

import type { Collection } from "../../types";

async function deleteOneFiresoreData(coll:Collection, id:string): Promise<void>{
    try{
        await deleteDoc(doc(db, coll, id));
    }catch(e){
        console.log(`error deleting doc ${id} for ${coll}`, e);
    }
}

export default deleteOneFiresoreData