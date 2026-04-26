import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { ButtonForm, InputForm } from "../../ui"

// import { AddFiresoreData, db } from "../../../store"
// import { deleteAllItemsFromCart } from "../../../redux/cart/cartSlice"
import { OrderStatus } from "../../../types"

import type {GameData, OrderData, UserData } from "../../../types"
import type { RootState } from "../../../redux"

import "./OrderFormSection.css"
import { CalctotalPrice, SubmitStore } from "../../../utils"
import { addOrderData } from "../../../redux/orders/orderLoadSlice"

const OrderFormSection = () => {
  const [nick, setNick] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [tel, setTel] = useState<string>("")
  const [agreed, setAgreed] = useState<boolean>(false)
  const cartData: Array<GameData> = useSelector((state: RootState)=> state.cart.itemsInCart)

  const dispatch = useDispatch(); const navigate = useNavigate()

  const OnSubmit = async(e:React.FormEvent) =>{
    e.preventDefault()

    const userData: UserData = {
          nickname: nick,
          email,
          phone: tel
    }  

    const orderData: Omit<OrderData, "order_id"> = {
        fullprice: cartData.length === 1 ? cartData[0].price : CalctotalPrice(cartData),
        status: OrderStatus.WAIT,
        game_data: cartData,
        user_data: userData
    }

    const getID = await SubmitStore(orderData, "orders")
    
    if(getID){
      console.log(getID);
      
      dispatch(addOrderData({order_id:getID, ...orderData}))
      // dispatch(deleteAllItemsFromCart())
      navigate("/")
    }
  }
  return (
    <form className="order-form-section" onSubmit={OnSubmit}>
        <InputForm
        id_tag="form-nickname"
        type="text"
        value_state={nick} value_set={setNick}
        >Ваш никнейм</InputForm>
        
        <InputForm
        id_tag="form-email"
        type="email"
        value_state={email} value_set={setEmail}
        >Email</InputForm>
        
        <InputForm
        id_tag="form-tel"
        type="tel"
        value_state={tel} value_set={setTel}
        >Номер телефона</InputForm>
        
        <InputForm
        id_tag="form-checkbox"
        type="checkbox"
        value_state={agreed} value_set={setAgreed}
        >Я согласен с условиями</InputForm>

        <ButtonForm state={agreed}>Оформить заказ</ButtonForm>
    </form>
  )
}

export default OrderFormSection