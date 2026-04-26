import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import type { FireBaseConfig } from "../types";

const firebaseConfig:FireBaseConfig = {
  apiKey: "AIzaSyAx0-QG_Q-cuM78vf2XuzY2IB3ETHHAyoY",
  authDomain: "gameshop-c006f.firebaseapp.com",
  projectId: "gameshop-c006f",
  storageBucket: "gameshop-c006f.firebasestorage.app",
  messagingSenderId: "510461697004",
  appId: "1:510461697004:web:346f4e1d04f2971fe4fec9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {default as AddFiresoreData} from "./firestore/addFirestoreData"
export {default as GetFirestoreData} from "./firestore/getFirestoreData"
export {default as DeleteOneFiresoreData} from "./firestore/deleteOneFirestoreData"