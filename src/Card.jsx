import "./Card.css";

export default function Card({ Data }) {
  return (
    <div className="cardContainer">
      {!Data ? "Please select a language" : Data}
    </div>
  );
}
