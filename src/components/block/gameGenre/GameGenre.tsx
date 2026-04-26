import "./GameGenre.css"

const GameGenre = ({genre}:{genre:string}) => {
  return (
    <span className="game-genre">{genre}</span>
  )
}

export default GameGenre;
