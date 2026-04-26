import type { GameData } from '../../../types'

import "./OrderGameCard.css"

const OrderGameCard = ({game}:{game:GameData}) => {
  return (
    <div className="game-card">
        <div className="game-image">
            {game.image ? <img src={game.image} alt={game.title} /> : 'image'}
        </div>
        <div className="game-info">
            <div className="game-title">{game.title}</div>
            <div className="game-cost">{game.price} руб.</div>
        </div>
    </div>
  )
}

export default OrderGameCard;