import type { UserData } from '../../../types'

import "./OrderUserDetails.css"

const OrderUserDetails = ({user}:{user:UserData}) => {
  return (
    <div className="user-details">
        <p><span>Никнейм:</span> {user.nickname}</p>
        <p><span>email:</span> {user.email}</p>
        <p><span>телефон:</span> {user.phone}</p>
    </div>
  )
}

export default OrderUserDetails