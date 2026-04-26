import { 
    createSlice, 
    createAsyncThunk,
    type PayloadAction 
} from "@reduxjs/toolkit";

import { readLocalData } from "../../utils";

import { type GameData} from "../../types";

interface CartState{
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    itemsInCart: Array<GameData>
};

export const loadCartThunk = createAsyncThunk(
    "itemsInOrders/load-data",
    async (_, { rejectWithValue }) =>{
        try{
            const response = readLocalData<Array<GameData>>("itemsInCart")
            if(response) return response
            else return []
        }catch(e){
            console.log(e);
            return rejectWithValue(e)
        }
    }
)

const initialState: CartState = {
    loading: "idle",
    error: null,
    itemsInCart: []
};

const cartSlice = createSlice({
    name:'cart', 
    initialState,
    reducers:{
        setItemInCart: (state, action: PayloadAction<GameData>) => {
            state.itemsInCart.push(action.payload);
        },
        deleteAllItemsFromCart:(state) =>{
            state.itemsInCart = []
        },
        deleteItemFromCart:(state, action:PayloadAction<string>)=>{
            state.itemsInCart = state.itemsInCart.filter(game=> game.id !== action.payload)
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loadCartThunk.pending, (state)=>{
            state.loading = "pending"
        })
        .addCase(loadCartThunk.fulfilled, (state, action:PayloadAction<Array<GameData>>)=>{
            state.loading = "succeeded";
            state.itemsInCart = action.payload; 
        })
        .addCase(loadCartThunk.rejected, (state, action)=>{
            state.loading = "failed";
            state.error = action.error.message as string;
        })
    }
});

export const {setItemInCart, deleteItemFromCart, deleteAllItemsFromCart} = cartSlice.actions; 

export default cartSlice.reducer;
