import { Outlet } from "react-router-dom"

const OrderPage = () => {
  return (
    <div className="order-page">
      <Outlet />
    </div>
  )
}

export default OrderPage;