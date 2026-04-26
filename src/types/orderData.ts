import { type GameData } from "./gamesData";

export interface UserData {
    email:string,
    nickname:string,
    phone:string,
}

export interface OrderData {
    order_id: string;
    fullprice: number;
    status: OrderStatusType
    game_data: Array<GameData>;
    user_data: UserData;
}

export type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus];

export const OrderStatus = {
    WAIT: "waiting for payment",
    PAID: "order was paid",   
    DONE: "order is complete", 
}