import React from "react";
import { navLinks } from "../constants";
import { useAppContext } from "../context/context";
import { OPEN_MENU } from "../context/reducer";
import { moonIcon, sunIcon, openMenuIcon } from "../constants";
import { TOGGLE_LIGHT } from "../context/reducer";

const Navbar = () => {
  let {
    navLogo: { front, back },
  } = navLinks;

  let { state, dispatch } = useAppContext();

  let { isLightTheme, light, dark, openMenu } = state;

  const toggleOpenMenu = () => {
    dispatch({
      type: OPEN_MENU,
      payload: !openMenu,
    });
  };
  return (
    <nav
      style={{
        background: `${isLightTheme ? light.mainColor1 : dark.mainColor1}`,
      }}
      className={`navbar`}
    >
      <div className="nav-logo">
        <p style={{ fontSize: "1.2rem" }} className="nav-logo-front front-name">
          {front}
        </p>
        <p style={{ fontSize: "1.2rem" }} className="nav-logo-back back-name">
          {back}
        </p>
      </div>

      <div className="nav-menu">
        <div className="nav-menu-toggle-mode">
          <span
            style={{
              color: isLightTheme ? dark.mainColor1 : light.mainColor1,
              cursor: "pointer",
            }}
            onClick={() =>
              dispatch({
                type: TOGGLE_LIGHT,
                payload: !isLightTheme,
              })
            }
          >
            {isLightTheme ? (
              <span style={{ width: "24px" }}>{moonIcon}</span>
            ) : (
              <span style={{ width: "24px" }}>{sunIcon}</span>
            )}
          </span>
        </div>
        <div className="">
          <span
            onClick={toggleOpenMenu}
            className="nav-icon"
            style={{ width: "34px", height: "34px" }}
          >
            {openMenuIcon}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
