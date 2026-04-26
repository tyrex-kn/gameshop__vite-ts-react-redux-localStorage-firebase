import "./CartItem.css"

export const CartItem = ({
    title,
    price,
    image
}:{
  title:string, image:string, price:number
}
) => {
  return (
    <div className="cart-item">
        <span>{title}</span>
        <div className="cart-item__price"><span>{price} руб.</span></div>
    </div>
  )
}
