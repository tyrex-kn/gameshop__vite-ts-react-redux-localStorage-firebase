import { createSlice, type PayloadAction } from "@reduxjs/toolkit"; 

import { type GameData } from "../../types";

interface GameState{
    currentGame: GameData | null
}

const initialState:GameState = {
    currentGame: null
}

const gameSlice = createSlice({
    name:'game', 
    initialState, 
    reducers:{
        setCurrentGame: (state, action: PayloadAction<GameData>) =>{
            state.currentGame = action.payload
        }
    },
})

export const {setCurrentGame} = gameSlice.actions; 
export default gameSlice.reducer