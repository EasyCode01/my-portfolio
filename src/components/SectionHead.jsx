import React from "react";
import { useAppContext } from "../context/context";

const SectionHead = ({ mainTitle }) => {
  let { dispatch, state } = useAppContext();
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
      <p
        style={{
          color: isLightTheme ? dark.mainColor1 : light.mainColor1,
        }}
        className="section-head-label"
      >
        FRONTEND ENGINEER BASED IN LAGOS
      </p>
    </div>
  );
};

export default SectionHead;