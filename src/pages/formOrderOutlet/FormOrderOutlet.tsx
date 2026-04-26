import OrderFormSection from "../../components/section/orderFormSection/OrderFormSection"

import "./FormOrderOutlet.css"

const FormOrderOutlet = () => {
  return (
    <div className="order-form-page">
      <h1>Оформление заказа</h1>
      <OrderFormSection />
    </div>
  )
}

export default FormOrderOutlet