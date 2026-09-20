import { use } from "react";
import type { Card } from "../../types/cardtypes";
import CardCard from './Card'

const Cards = ({ cardsPromise }: { cardsPromise: Promise<Card[]> }) => {
const allCards = use(cardsPromise);
  return(
    <div className = "col-span-3 grid grid-cols-3 gap-5">
      {allCards.length === 0 && <p>No Technologies Found</p>}
      {allCards.map((singleCard) =>(
        //<CardCard key={singleCard.id} card={singleCard}></CardCard>
        <p>{singleCard.category}</p>
      ))}
      </div>
  
  );
};

export default Cards;