import React, { useState } from "react";
import "./style.css";
import { sideLinks } from "../constants";
import { useAppContext } from "../context/context";
import { blogLink } from "../constants";
import { SET_ACTIVE_SECTION } from "../context/reducer";

const Sidebar = () => {
  let { dispatch, state } = useAppContext();
  let { isLightTheme, light, openMenu, dark, activeSection } = state;

  const [currentIndicator, setCurrentIndicator] = useState(0);

  const changeCurrentIndicator = (idx, section) => {
    setCurrentIndicator(idx);
    dispatch({
      type: SET_ACTIVE_SECTION,
      payload: section,
    });
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
            style={{ transform: `translateY(${currentIndicator * 70}px)` }}
            className={`active-indicator`}
          ></div>
          {sideLinks.map((link, idx) => (
            <a
              href={link.activeSection}
              style={{ color: dark.mainColor1 }}
              key={link.label}
              onClick={() => changeCurrentIndicator(idx, link.activeSection)}
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
            </a>
          ))}
        </ul>

        <ul
          style={{
            justifySelf: "flex-end",
          }}
          className="blog-icon"
        >
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                color: isLightTheme ? "" : light.mainColor1,
                width: "24px",
                height: "24px",
              }}
              className="sidebar-icon"
            >
              {blogLink.icon}
            </span>
            <span
              style={{
                color: isLightTheme ? "" : light.mainColor1,
              }}
              className={`sidebar-label `}
            >
              {blogLink.label}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
