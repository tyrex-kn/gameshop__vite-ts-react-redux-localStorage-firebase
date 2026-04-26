import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../ui"

import { deleteItemFromCart, setItemInCart } from "../../../redux/cart/cartSlice";
import { saveLocalData } from "../../../utils";

import { type GameData } from "../../../types";
import { type RootState } from "../../../redux";

import "./GameBuy.css"
import { useEffect } from "react";

const GameBuy = ({game}:{game:GameData}) => {
  const dispatch = useDispatch()
  const items = useSelector((state:RootState)=>state.cart.itemsInCart)
  const isItemInCart = items.some(item=>item.id===game.id)
  
  useEffect(()=>{
    saveLocalData<Array<GameData>>(items, "itemsInCart")
  },[items])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.stopPropagation(); 
    if(isItemInCart) dispatch(deleteItemFromCart(game.id))
    else{
      dispatch(setItemInCart(game))
    } 
  };

  return (
    <div className="game-buy">
        <span className="game-buy__price">{game.price} руб.</span>
        <Button 
          type={isItemInCart ? "secondary" : "primary"}
          onClick={ handleClick }
        >
          {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
        </Button>
    </div>
  )
}

export default GameBuy;
