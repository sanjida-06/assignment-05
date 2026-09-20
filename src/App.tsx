import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/shared/Hero";
import Footer from "./components/shared/Footer";
import Cards from "./components/CardsSection/Cards";
import YourStack from "./components/CardsSection/YourStack";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import type { Card } from "./types/cardTypes";

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<Card[]>([]);

  useEffect(() => {
    fetch("/cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load cards:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (card: Card) => {
    const alreadyExists = stack.some((item) => item.id === card.id);
    if (alreadyExists) {
      toast.warn(`${card.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, card]);
    toast.success(`${card.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`);
    }
  };

  const handleClearStack = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Cleared all technologies from your stack.");
  };

  const selectedIds = stack.map((item) => item.id);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fcfcfd]">
      <ToastContainer position="top-right" autoClose={2500} />
      <div>
        <Navbar />
        <Hero />
        <main>
          <section
            id="technologies"
            className="max-w-[1200px] mx-auto px-6 my-10 scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Cards Component with Loading State */}
              {loading ? (
                <LoadingSpinner />
              ) : (
                <Cards
                  cards={cards}
                  onAddToStack={handleAddToStack}
                  selectedIds={selectedIds}
                />
              )}



              {/* Your Stack Sidebar Component */}
              <div className="col-span-1">
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onClear={handleClearStack}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;