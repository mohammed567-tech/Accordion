import { useState } from "react";

export default function ItemAccordion({ num, title, description }) {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`item ${isActive ? "open" : ""}`} onClick={handleToggle}>
      <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
      <p className="text">{title}</p>
      <p className="icon">{isActive ? "-" : "+"}</p>
      {isActive ? <div className="content-box">{description}</div> : ""}
    </div>
  );
}
