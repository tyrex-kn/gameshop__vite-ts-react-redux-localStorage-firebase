import { useState } from 'react';

import OrderGameCard from '../orderGameCard/OrderGameCard';
import OrderUserDetails from '../orderUserDetails/OrderUserDetails';

import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from '../../ui';

import type { OrderData } from '../../../types';

import './OrderCard.css';
import { useDispatch } from 'react-redux';
import { DeleteOneFiresoreData } from '../../../store';
import { deleteOrderData } from '../../../redux/orders/orderLoadSlice';

const OrderCard = ({ order }:{order:OrderData}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const btnText = !isVisible ? "Подробнее" : "Скрыть";
  const btnClick = () => setIsVisible(!isVisible);
  
  const dispatch = useDispatch()
  const deleteClick = async () =>{
    await DeleteOneFiresoreData("orders", order.order_id)
    dispatch(deleteOrderData(order.order_id)) 
  }
  
  return !order ? (<h1>Заказов нет</h1>) : (
    <div className="order-card">
      <div className="order-header">
        <AiOutlineCloseCircle size={25} className='close-button' onClick={deleteClick} />
        
        <h2 className="order-id">
          ЗАКАЗ: <span>{order.order_id}</span>
        </h2>

        <OrderUserDetails user={order.user_data} />

        <div className="header-bottom">
          {/* <button className="more-info-btn">Подробнее</button> */}
          <Button onClick={btnClick} type='primary'>{btnText}</Button>
          <div className="summary">
            <div className="full-price">{order.fullprice} руб.</div>
            <div className="status">Статус: <span>{order.status}</span></div>
          </div>
        </div>
      </div>
      {
        isVisible && <div className='order-game'>
          <hr />
          <div className="order-grid">
          

            {order.game_data.map((game) => <OrderGameCard key={game.id} game={game} />)}
          </div>
        </div>
      }
      
    </div>
  );
};

export default OrderCard;