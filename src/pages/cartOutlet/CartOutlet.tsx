import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { OrderItem } from "../../components/block";
import { Button } from "../../components/ui";

import { CalctotalPrice } from "../../utils";

import type { RootState } from "../../redux";

import "./CartOutlet.css";

const CartOutlet = () => {
  const navigate = useNavigate()
  
  const handleClick = () =>{
    navigate('form-order')
  }

  const items = useSelector((state: RootState) => state.cart.itemsInCart);

  return items.length > 0 ? (
    <div className="cart-page">
      <div className="cart-page__up">
        {items.map((game) => (
          <OrderItem key={game.id} game={game} />
        ))}
      </div>
      <div className="cart-page__down">
        <div className="cart-page__total-price">
          <span>
            {items.length} товаров на сумму {CalctotalPrice(items)} руб.
          </span>
          <Button type="primary" onClick={handleClick}>Оформить заказ</Button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Ваша корзина пуста</h1>
  );
};

export default CartOutlet;
