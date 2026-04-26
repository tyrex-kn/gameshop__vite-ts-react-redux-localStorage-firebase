import { createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Collection, OrderData, OrderState } from "../../types";
import { GetFirestoreData } from "../../store";

export const loadOrderThunk = createAsyncThunk(
    "itemOrders/load-data",
    async (coll:Collection,  { rejectWithValue }) => {
        try{
            const response = await GetFirestoreData(coll);
            return response as Array<OrderData>;
        }catch(e:any){
            return rejectWithValue(e.message || "unknown error")
        }
    }
)

const initialOrderState: OrderState = {
    body: [],
    loading: "idle",
    error: null,
}

const orderLoadSlice = createSlice({
    name:'itemOrders',
    initialState: initialOrderState,
    reducers: {
        addOrderData: (state, action: PayloadAction<OrderData>) =>{
            state.body.push(action.payload)
        },
        deleteOrderData:(state, action:PayloadAction<string>)=>{
            state.body = state.body.filter(order => order.order_id !== action.payload) || null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadOrderThunk.pending, (state)=>{
            state.loading = "pending"
        })
        .addCase(loadOrderThunk.fulfilled, (state, action)=>{
            state.loading = "succeeded";
            state.body = action.payload; 
        })
        .addCase(loadOrderThunk.rejected, (state, action)=>{
            state.loading = "failed",
            state.error = action.error.message as string
        })
    },

})

export const {addOrderData, deleteOrderData} = orderLoadSlice.actions;
export default orderLoadSlice.reducer;