import React from "react";
import SectionHead from "../../components/SectionHead";
import { useAppContext } from "../../context/context";
import Project from "../../components/Project";
import { projects } from "../../constants";

const Portfolio = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <section
      style={{
        background: isLightTheme ? light.mainColor1 : dark.mainColor1,
      }}
      id="portfolio"
      className="portfolio padding-y"
    >
      <div className="section-container">
        <SectionHead mainTitle="My latest work" />

        <div>
          <p
            style={{
              marginTop: "20px",
              color: isLightTheme ? dark.mainColor1 : light.mainColor1,
            }}
            className="small-label"
          >
            Each project is a unique piece of development
          </p>
          <div className="project-container">
            {projects.map((project, idx) => (
              <Project key={idx} item={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
