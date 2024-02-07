import React from "react";
import { robots } from './robots'
import Card from './Card'

const CardList = () => {
  return (
    <div> 
      {
        robots.map((bot, i) => {
          return (<Card 
            key={bot.id} 
            name={bot.name} 
            id={bot.id} 
            email={bot.email}
            />
          )}
        )
      }
    </div>
  );
}

export default CardList;