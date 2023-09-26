import React from "react";
import SectionHead from "./SectionHead";
import { useAppContext } from "../context/context";
import { tecnologies } from "../constants";

const MySkills = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <section
      style={{ background: isLightTheme ? light.mainColor1 : dark.mainColor1 }}
      className="my-skills padding-y"
    >
      <div className="section-container">
        <SectionHead mainTitle="My skills" />

        <div>
          <div
            style={{
              color: isLightTheme ? dark.mainColor1 : light.mainColor1,
              marginTop: "20px",
            }}
            className="label"
          >
            Tools
          </div>
          <p
            style={{
              color: isLightTheme ? dark.mainColor1 : light.mainColor1,
              marginTop: "20px",
            }}
            className="text"
          >
            I specialize in crafting web applications and websites using
            cutting-edge technologies like:
          </p>
          <div className="technologies">
            {tecnologies.map((tech, idx) => (
              <span
                key={idx}
                style={{ cursor: "pointer" }}
                title={tech.name}
                className="technology"
              >
                {tech.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
