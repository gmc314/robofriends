import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map(bot => {
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