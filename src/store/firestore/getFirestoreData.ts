import { collection, getDocs } from "firebase/firestore";

import { db } from "..";

import type { Collection } from "../../types";

async function AddFiresoreData<T extends object>(coll:Collection): Promise<Array<T>>{
    try{
        const querySnapshot = await getDocs(collection(db, coll))
        
        const data = querySnapshot.docs.map((doc)=>(
            coll === "orders" ?
            {       
                order_id: doc.id,
                ...doc.data()
            }
            :
            {
                id: doc.id,
                ...doc.data()
            }
        )) as Array<T>        
        return data;
    }catch(e){
        console.log(`error adding data for ${coll}`, e);
        return [];
    }
}

export default AddFiresoreData;