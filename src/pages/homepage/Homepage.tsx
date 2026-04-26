import { useEffect, useState } from 'react'
import { GameItem } from '../../components/block/index.ts'

import { type GameStoreData } from '../../types/gamesData.ts'

import './Homepage.css'
import { useSelector } from 'react-redux'

const Homepage = ({items}: {items:GameStoreData | null}) => {
  // const [itemsInCart, setItemsInCart] = useState<Array<GameData>>([])
  
  // useEffect(()=>{

  // })
  return items == null ? 
  (
    <div className='home-page'></div>
  )
  :(
    <div className='home-page'>
        {items.map((item)=><GameItem game={item} key={item.id} />)}
    </div>
  )
}

export default Homepage;