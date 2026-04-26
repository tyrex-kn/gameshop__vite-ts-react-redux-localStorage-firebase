import { 
    createSlice, 
    type PayloadAction 
} from "@reduxjs/toolkit";

import type { OrderData } from "../../types";

interface orderState{
    itemsInOrder: Array<OrderData>
};

const initialState: orderState = {
    itemsInOrder: []
};

const orderSlice = createSlice({
    name:'order', 
    initialState,
    reducers:{
        setItemInOrder: (state, action: PayloadAction<OrderData>) => {
            state.itemsInOrder.push(action.payload);
        },
        deleteItemFromOrder:(state,action:PayloadAction<string>)=>{
            state.itemsInOrder = state.itemsInOrder.filter(order=>order.order_id !== action.payload)
        }
    }
});

export const {setItemInOrder, deleteItemFromOrder} = orderSlice.actions; 

export default orderSlice.reducer;
