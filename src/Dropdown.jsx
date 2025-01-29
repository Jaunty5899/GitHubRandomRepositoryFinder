import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ Data, selectFunction }) {
  const [toggle, setToggle] = useState(false);
  const [choice, setChoice] = useState(Data[0].title);
  return (
    <div className="dropDownContainer">
      <div className="dropDownButton" onClick={() => setToggle(true)}>
        {choice}
        <span className="dropDownDirection">{toggle ? "▲" : "▼"}</span>
      </div>
      <div className={`dropDownList ${toggle && "active"}`}>
        {Data.map((e) => (
          <div
            className={`dropDownOption ${e.title == choice && "activeMarker"}`}
            onClick={() => {
              setChoice(e.title);
              e.value && selectFunction(e.value);
              setToggle(false);
            }}
          >
            {e.title}
          </div>
        ))}
      </div>
    </div>
  );
}
