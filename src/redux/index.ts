import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice' 
import gameReducer from './games/gameSlice' 
import gameLoadReducer from './games/gameLoadSlice'
import orderReducer from './orders/orderSlice'
import orderLoadReducer from './orders/orderLoadSlice'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        game:gameReducer,
        order: orderReducer,
        item: gameLoadReducer,
        itemOrders: orderLoadReducer
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export {loadGameThunk} from "./games/gameLoadSlice"
export {loadOrderThunk} from "./orders/orderLoadSlice"