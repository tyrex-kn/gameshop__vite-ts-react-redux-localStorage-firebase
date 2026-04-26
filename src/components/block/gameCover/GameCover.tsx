import "./GameCover.css"

const GameCover = ({image = ""}:{image:string}) => {
  return (
    <div className="game-cover" style={{backgroundImage: `url(${image})`}}></div>
  )
}

export default GameCover