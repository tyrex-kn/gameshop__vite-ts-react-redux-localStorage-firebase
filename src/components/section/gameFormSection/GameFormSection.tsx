import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ButtonForm, InputForm } from "../../ui";
import TagForm from "../../ui/form/tagForm/TagForm";

import { SubmitStore } from "../../../utils"
import { addGameData } from "../../../redux/games/gameLoadSlice";

import type { GameData } from "../../../types"

import "./GameFormSection.css"

const GameFormSection = () => {
//   const [id, setID] = useState<string>("")
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [video, setVideo] = useState<string>("")
  const [genres, setGenres] = useState<Array<string>>([''])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const OnSubmit = async (e: React.FormEvent) =>{ 
    e.preventDefault()
    
    const data: Omit<GameData, "id"> = {
        title,
        price: parseInt(price, 10),
        description: desc,
        genres: genres.filter(g => g.trim() !== ""),
        image: img,
        video
    }    
    
    const getId = await SubmitStore(data, "games")

    if(getId){
        dispatch(addGameData({id:getId, ...data}))
        navigate("/")
    }
  }
  
   

  return (
    <form 
        className="game-form-section"
        onSubmit={OnSubmit}
    >
      <InputForm
          id_tag="form-title"
          type="text"
          value_state={title} value_set={setTitle}
      > Название игры </InputForm>

      <InputForm
          id_tag="form-price"
          type="text"
          value_state={price} value_set={setPrice}
      > Цена </InputForm>

      <InputForm
          id_tag="form-img"
          type="text"
          value_state={img} value_set={setImg}
      > Обложка </InputForm>

      <InputForm
          id_tag="form-video"
          type="text"
          value_state={video} value_set={setVideo}
      > Ссылка на трейлер </InputForm>

      <InputForm
          id_tag="form-desc"
          type="textarea"
          value_state={desc} value_set={setDesc}
      > Описание </InputForm>

      <TagForm genres_state={genres} genres_set={setGenres} />

      <ButtonForm>Добавить игру в Магазин</ButtonForm>
    </form>
  )
}

export default GameFormSection