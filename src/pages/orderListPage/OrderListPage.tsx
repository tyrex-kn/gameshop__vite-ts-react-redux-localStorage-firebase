import { useSelector } from "react-redux"

import { OrderListSection } from "../../components/section"

import type { RootState } from "../../redux"
import type { OrderData } from "../../types"

const OrderListPage = () => {
  const orders = useSelector((state: RootState) => state.itemOrders.body as Array<OrderData>)
  
  console.log(orders);
  

  return (
    <div className="order-list-page">
      <OrderListSection orders={orders}/>
    </div>
  )
}

export default OrderListPage