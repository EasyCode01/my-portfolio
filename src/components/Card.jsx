import React from "react";
import { useAppContext } from "../context/context";

const Card = ({ item: { icon, label, text } }) => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <div className="card">
      <div style={{ color: light.cta }} className="card-icon">
        {icon}
      </div>
      <p className="small-label">{label}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Card;
