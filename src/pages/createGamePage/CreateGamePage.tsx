import { GameFormSection } from "../../components/section"

import "./CreateGamePage.css"

const CreateGamePage = () => {
  return (
    <div className="create-game-page">
      <h1>Добавить игру в магазин</h1>
      <GameFormSection />
    </div>
  )
}

export default CreateGamePage;