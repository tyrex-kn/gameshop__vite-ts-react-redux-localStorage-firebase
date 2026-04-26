import { type GameData } from "../types";

const CalctotalPrice = (items: Array<GameData>) => items.reduce((acc, game) => acc += game.price, 0)

export default CalctotalPrice;