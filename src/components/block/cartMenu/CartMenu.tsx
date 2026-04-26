import {CartItem} from "../cartItem/CartItem"
import { Button } from "../../ui";

import { CalctotalPrice } from "../../../utils";

import { type GameData } from "../../../types";

import "./CartMenu.css";

interface CartMenuParametres{
  items:Array<GameData>,
  onClick: ()=> void
}

export const CartMenu = ({ items, onClick }:CartMenuParametres) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                image={game.image}
                price={game.price}
                title={game.title}
              />
            ))
          : "Коризна пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{CalctotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Открыть корзину
          </Button>
        </div>
      ) : null}
    </div>
  );
};
