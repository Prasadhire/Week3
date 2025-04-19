import Card from "./Card";
import './App.css';

function App() {
  const Cards = [
    {
      title: "Main hu Lucky The Racer",
      description: "This is the famous South Indian movie of Allu Arjun."
    },
    {
      title: "Geeta Govinda",
      description: "Famous for its love story between Rashmika Mandana and Vijay Deverakonda."
    },
    {
      title: "Ala Vaikunthapurramuloo",
      description: "Popular South Indian film For there Story Line and Songs."
    }
  ];

  return (
    <div className="App">
      <h1>Day 3 Task: Cards with Props</h1>
      {Cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
