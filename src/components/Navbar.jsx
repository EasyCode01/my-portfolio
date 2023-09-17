import React from "react";
import { navLinks } from "../constants";
import { useAppContext } from "../context/context";
import { OPEN_MENU } from "../context/reducer";
import { Icon } from "@iconify/react";
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
              <Icon icon="bi:moon" width={24} />
            ) : (
              <Icon icon="charm:sun" width={24} />
            )}
          </span>
        </div>
        <div className="">
          <svg
            onClick={toggleOpenMenu}
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              id="feBar0"
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeWidth="1"
            >
              <g id="feBar1" fill="currentColor">
                <path
                  id="feBar2"
                  d="M3 16h18v2H3v-2Zm0-5h18v2H3v-2Zm0-5h18v2H3V6Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
