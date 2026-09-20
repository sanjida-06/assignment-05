import Navbar from "./components/shared/Navbar";
import Hero from "./components/shared/Hero";
import Footer from "./components/shared/Footer";
import Cards from "./components/CardsSection/Cards";

const fetchCards = async () => {
  const res = await fetch("/cards.json");
  const data = await res.json();
  return data; 
}
const cardsPromise = fetchCards();
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <section className='container mx-auto my-10'>
          <div>
            {/*cards component*/}
            <Cards />
            {/*list component*/}
          </div>
          </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;