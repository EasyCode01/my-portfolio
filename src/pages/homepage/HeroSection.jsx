import React, { useEffect } from "react";
import "./style.css";
import { heroPage } from "../../constants";
import { chevronDown, sunIcon, moonIcon } from "../../constants";
import { useAppContext } from "../../context/context";
import { TOGGLE_LIGHT } from "../../context/reducer";
import Typewriter from "../../components/Typewriter";

const HeroSection = () => {
  let { left, right } = heroPage;
  let { dispatch, state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  const theme = isLightTheme ? light : dark;

  useEffect(() => {
    localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));
  }, [isLightTheme]);

  const toogleLightTheme = () => {
    dispatch({
      type: TOGGLE_LIGHT,
      payload: !isLightTheme,
    });
  };

  return (
    <div className="hero">
      <div className="section-container d-flex">
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
            <h3 className="label">
              {left.passion} <Typewriter />
            </h3>
            <p
              style={{
                color: theme.mainText,
              }}
              className="text"
            >
              {left.bio}
            </p>
            <div className="button-holder">
              <a href="#portfolio">
                <button className="btn-fill">{left.myWorkBtn}</button>
              </a>
              <a href="#contact">
                <button className="btn">{left.hireMeBtn}</button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            background: theme?.mainColor1,
          }}
          className="hero-right"
        >
          <img src={right.img} alt="Oyedijo Ezekiel | hero image" />
        </div>

        <a href="#about-me" className="scroll-down">
          <span style={{ width: "24px" }} className="scroll-down-icon">
            {chevronDown}
          </span>
        </a>

        <div className="toggle-mode">
          <span
            style={{ color: isLightTheme ? dark.mainColor1 : light.mainColor1 }}
            onClick={toogleLightTheme}
          >
            {isLightTheme ? (
              <span style={{ width: "24px", height: "24px" }}>{moonIcon}</span>
            ) : (
              <span style={{ width: "24px", height: "24px" }}>{sunIcon}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
