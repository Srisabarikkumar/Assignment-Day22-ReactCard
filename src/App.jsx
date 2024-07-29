import Cardcomp from "./Cardcomp";
import cardData from "./cardData";
import "./App.css";
import CardWrapper from "./CardWrapper";

function App() {
  const cardContainer = cardData.map((item) => (
    <Cardcomp
      key={item.id}
      id={item.id}
      subscription={item.subscription}
      price={item.price}
      userLimit={item.userLimit}
      storage={item.storage}
      publicProjects={item.publicProjects}
      access={item.access}
      privateProjects={item.privateProjects}
      phoneSupport={item.phoneSupport}
      subdomain={item.subdomain}
      statusReports={item.statusReports}
    />
  ));

  return <CardWrapper>{cardContainer}</CardWrapper>;
}

export default App;
