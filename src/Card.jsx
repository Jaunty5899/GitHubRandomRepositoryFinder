import "./Card.css";

export default function Card({ Data }) {
  return (
    <div className="cardContainer">
      <h3 className="cardTitle">
        {!Data ? "Please select a language" : Data.name}
      </h3>
      <p className="cardDescription">{Data.description}</p>
    </div>
  );
}
