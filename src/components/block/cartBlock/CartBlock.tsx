import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { BiCartAlt } from "react-icons/bi";

import { ItemsInCart } from "../itemsInCart/ItemsInCart";
import { CartMenu } from "../cartMenu/CartMenu";

import { CalctotalPrice } from "../../../utils";

import { type RootState } from "../../../redux";

import "./cartblock.css";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState<boolean>(false)
  const items = useSelector((state:RootState) => state.cart.itemsInCart);
  const totalPrice = CalctotalPrice(items);

  const navigate = useNavigate()
  const handleClick = useCallback (() =>{
      setIsCartMenuVisible(false)
      navigate('/order')
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt size={25} color={isCartMenuVisible ? "rgb(146, 76, 226)" : ""} className="cart-icon" onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} /> }
    </div>
  );
};

export default CartBlock;
