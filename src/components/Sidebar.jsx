import React, { useState } from "react";
import "./style.css";
import { sideLinks } from "../constants";
import { useAppContext } from "../context/context";

const Sidebar = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, openMenu } = state;

  const [currentIndicator, setCurrentIndicator] = useState(0);

  const changeCurrentIndicator = (idx) => {
    setCurrentIndicator(idx);
  };
  return (
    <nav
      style={{ background: isLightTheme ? "#fff" : "#1f2937" }}
      className={`sidebar ${openMenu ? "openSideMenu" : "closeSideMenu"}`}
    >
      <div>
        <div
          style={{ background: isLightTheme ? light.cta : "#1f2937" }}
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
              <span className="sidebar-icon">
                <img src={link.icon} alt="sidebar-icon" width={26} />
              </span>
              <span className="sidebar-label">{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
