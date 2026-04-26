import { OrderCard } from '../../block'

import type { OrderData } from '../../../types'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux'

const OrderListSection = ({orders}:{orders:Array<OrderData>}) => {
  const items = useSelector((state: RootState)=> state.itemOrders.body)
  if(!orders || items?.length === 0) return <h1>Заказов нет</h1>
  else return (
    <div>
       {orders.map((order, i) => <OrderCard key={i} order={order} />) }
    </div>
  )
}

export default OrderListSection