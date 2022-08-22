import React from 'react'
import './Cards.css'
import Card from '../Card/Card'
import { CardsData } from '../../Data/Data.js'

const Cards = () => {
  return (
    <div className='Cards'>
        {CardsData.map((card, id)=>{
            return(
                <div className='parentContainer'>
                    <Card
                        title={card.title}
                        title2={card.title2}
                        color={card.color}
                        barValue={card.barValue}
                        barValue2={card.barValue2}
                        value={card.value}
                        // png={card.png}
                        series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards