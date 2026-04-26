import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Collection, GameData, GameState, GameStoreData } from "../../types";
import { GetFirestoreData } from "../../store";

export const loadGameThunk = createAsyncThunk(
    "items/load-data",
    async (coll:Collection,  { rejectWithValue }) => {
        try{
            const response = await GetFirestoreData(coll);
            return response as GameStoreData;
        }catch(e:any){
            return rejectWithValue(e.message || "unknown error")
        }
    }
)

const initialGameState: GameState = {
    body: [],
    loading: "idle",
    error: null,
}

const gameLoadSlice = createSlice({
    name:'item',
    initialState: initialGameState,
    reducers: {
        addGameData: (state, action: PayloadAction<GameData>) =>{
            state.body?.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadGameThunk.pending, (state)=>{
            state.loading = "pending"
        })
        .addCase(loadGameThunk.fulfilled, (state, action)=>{
            state.loading = "succeeded";
            state.body = action.payload; 
        })
        .addCase(loadGameThunk.rejected, (state, action)=>{
            state.loading = "failed",
            state.error = action.error.message as string
        })
    },

})

export const {addGameData} = gameLoadSlice.actions; 
export default gameLoadSlice.reducer;