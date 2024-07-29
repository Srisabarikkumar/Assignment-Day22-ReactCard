import Cardcomp from "./Cardcomp";
import cardData from "./cardData";
import "./App.css";
import CardWrapper from "./CardWrapper";

function App() {
  const cardContainer = cardData.map((card) => (
    <Cardcomp key={card.id} card={card} />
  ));

  return <CardWrapper>{cardContainer}</CardWrapper>;
}

export default App;
