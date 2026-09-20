import type { Card as CardType } from "../../types/cardTypes";
import Card from "./Card";

interface CardsProps {
  cards: CardType[];
  onAddToStack?: (card: CardType) => void;
  selectedIds?: string[];
}

const Cards = ({ cards, onAddToStack, selectedIds = [] }: CardsProps) => {
  return (
    <div className="col-span-1 lg:col-span-3">
      {cards.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No Technologies Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((singleCard) => (
            <Card
              key={singleCard.id}
              card={singleCard}
              onAddToStack={onAddToStack}
              isAdded={selectedIds.includes(singleCard.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
