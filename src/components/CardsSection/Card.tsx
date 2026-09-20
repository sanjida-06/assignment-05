import type { Card as CardType } from "../../types/cardTypes";
import { FaStar } from "react-icons/fa";

interface CardProps {
  card: CardType;
  onAddToStack?: (card: CardType) => void;
  isAdded?: boolean;
}

const Card = ({ card, onAddToStack, isAdded = false }: CardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100">
            <img
              src={card.icon}
              alt={card.name}
              className="w-full h-full object-contain"
            />
          </div>
          {card.badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
              {card.badge}
            </span>
          )}
        </div>

        {/* Name and Description */}
        <h3 className="font-bold text-lg text-gray-900 mb-1">{card.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {card.description}
        </p>
      </div>

      <div>
        {/* Meta Info: Category, Difficulty & Rating */}
        <div className="flex items-center justify-between text-xs text-gray-500 py-3 border-t border-gray-100 mb-4">
          <span className="bg-gray-100 text-gray-700 font-medium px-2.5 py-1 rounded-md">
            {card.category}
          </span>
          <span>{card.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-gray-700">
            <FaStar className="text-yellow-400 text-sm" />
            {card.rating}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAddToStack && onAddToStack(card)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
              : "bg-brand-gradient text-white hover:opacity-90 cursor-pointer shadow-sm"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default Card;
