import type { Card } from "../../types/cardTypes";
import { IoClose } from "react-icons/io5";
import { BsLayers } from "react-icons/bs";

interface YourStackProps {
  stack: Card[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const YourStack = ({ stack, onRemove, onClear }: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div>
          <h2 className="font-bold text-lg text-gray-900">Your Stack</h2>
          <p className="text-xs text-gray-500">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-red-500 hover:text-red-700 font-medium hover:underline cursor-pointer"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="py-12 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-3 border border-gray-100">
            <BsLayers className="text-xl" />
          </div>
          <h4 className="font-semibold text-sm text-gray-700 mb-1">
            Stack is Empty
          </h4>
          <p className="text-xs text-gray-400 max-w-[200px]">
            Click "Add to Stack" on any technology to start building your stack.
          </p>
        </div>
      ) : (
        /* Selected Items List */
        <div className="mt-4 space-y-3 max-h-[520px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 min-w-9 rounded-lg bg-white p-1.5 flex items-center justify-center border border-gray-100">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="truncate">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                title={`Remove ${item.name}`}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition cursor-pointer"
              >
                <IoClose className="text-base" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;
