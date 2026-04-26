import { useDispatch } from "react-redux"

import { AiOutlineCloseCircle } from "react-icons/ai";

import GameCover from "../gameCover/GameCover";

import { deleteItemFromCart } from "../../../redux/cart/cartSlice";

import type { GameData } from "../../../types";

import "./OrderItem.css";

const OrderItem = ({ game }:{game:GameData}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }
  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle size={25} className="cart-item__delete-icon" onClick={handleClick}/>
      </div>
    </div>
  );
};

export default OrderItem;