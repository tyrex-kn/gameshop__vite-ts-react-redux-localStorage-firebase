// import { addGameData } from "../redux/games/gameLoadSlice";
import { AddFiresoreData, db } from "../store";
import type { Collection, GameData } from "../types";

const SubmitStore = async <T extends object>(
  formData:T, 
  coll:Collection, 
) => {
  try{
      const dataStore:T = formData

      const docId = await AddFiresoreData(db, coll, dataStore)      

      console.log(`adding data for ${coll} ${docId} collection`);
      
      return docId
  }catch(e){
    console.log(e);
  }
};

export default SubmitStore;