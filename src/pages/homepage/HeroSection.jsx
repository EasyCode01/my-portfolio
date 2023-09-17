import React from "react";
import "./style.css";
import { heroPage } from "../../constants";
import { chevronDown, moon, sun } from "../../assests/icons";
import { useAppContext } from "../../context/context";
import { TOGGLE_LIGHT } from "../../context/reducer";
import { Icon } from "@iconify/react";
const HeroSection = () => {
  let { left, right } = heroPage;
  let { dispatch, state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  const theme = isLightTheme ? light : dark;

  return (
    <div className="hero global-padding">
      <div
        style={{
          background: theme === light ? "#fefefe84" : dark.mainColor1,
        }}
        className={`hero-left`}
      >
        <div
          style={{
            color: theme?.bigHeading,
          }}
          className="hero-left-content"
        >
          <h6 className="small-label">{left.hello}</h6>
          <h1 className="name-title">{left.name}</h1>
          <h3 className="label">{left.passion}</h3>
          <p
            style={{
              color: theme.mainText,
            }}
            className="text"
          >
            {left.bio}
          </p>
          <div className="button-holder">
            <button className="btn-fill">{left.myWorkBtn}</button>
            <button className="btn">{left.hireMeBtn}</button>
          </div>
        </div>
      </div>

      <div
        style={{
          background: theme?.mainColor1,
        }}
        className="hero-right"
      >
        <img src={right.img} alt="" />
      </div>

      <div className="scroll-down">
        <img className="scroll-down-icon" src={chevronDown} alt="" width={24} />
      </div>

      <div className="toggle-mode">
        <span
          style={{ color: isLightTheme ? dark.mainColor1 : light.mainColor1 }}
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
    </div>
  );
};

export default HeroSection;
