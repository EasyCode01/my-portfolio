import React from "react";
import { useAppContext } from "../context/context";

const SectionHead = ({ mainTitle }) => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <div className="section-head">
      <h2
        style={{
          color: isLightTheme ? dark.mainColor1 : light.mainColor1,
        }}
        className="section-head-title title"
      >
        {mainTitle}
      </h2>
      <h4
        style={{
          color: isLightTheme ? dark.mainColor1 : light.mainColor1,
        }}
        className="section-head-label"
      >
        A REACT DEVELOPER BASED IN LAGOS
      </h4>
    </div>
  );
};

export default SectionHead;
