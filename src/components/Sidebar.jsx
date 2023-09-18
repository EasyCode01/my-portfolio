import React, { useState } from "react";
import "./style.css";
import { sideLinks } from "../constants";
import { useAppContext } from "../context/context";

const Sidebar = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, openMenu, dark } = state;

  const [currentIndicator, setCurrentIndicator] = useState(0);

  const changeCurrentIndicator = (idx) => {
    setCurrentIndicator(idx);
  };

  return (
    <nav
      style={{ background: isLightTheme ? light.whiteColor : dark.darkColor }}
      className={`sidebar ${openMenu ? "openSideMenu" : "closeSideMenu"}`}
    >
      <div>
        <div
          style={{ background: isLightTheme ? light.cta : dark.darkColor }}
          className="name-holder"
        >
          <p className="front-name">Ezekiel</p>
          <p className="back-name">Easy Code</p>
        </div>

        <ul className="sidebar-icon-list-holder">
          <div
            style={{ transform: `translateY(${currentIndicator * 80}px)` }}
            className={`active-indicator`}
          ></div>
          {sideLinks.map((link, idx) => (
            <li
              key={link.label}
              onClick={() => changeCurrentIndicator(idx)}
              className={`sidebar-icon-list ${
                currentIndicator === idx ? "active-sidelink" : ""
              }`}
            >
              <span
                style={{
                  color: isLightTheme ? "" : light.mainColor1,
                  width: "24px",
                  height: "24px",
                }}
                className="sidebar-icon"
              >
                {link.icon}
              </span>
              <span
                style={{
                  color: isLightTheme ? "" : light.mainColor1,
                }}
                className={`sidebar-label ${
                  currentIndicator === idx ? "active-sidelink" : ""
                }`}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
