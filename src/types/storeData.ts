import type { GameStoreData } from "./gamesData";
import type { OrderData } from "./orderData";

export interface FireBaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId:string,
    appId: string
}

export interface GameState{
    body: GameStoreData | null,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

export interface OrderState{
    body: Array<OrderData>,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

export type Collection = "games" | "orders"
