import React from "react";
import SectionHead from "../../components/SectionHead";
import Cards from "../../components/Card";
import { services } from "../../constants";
import { useAppContext } from "../../context/context";

const Services = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <section
      style={{ background: isLightTheme ? light.mainColor2 : dark.mainColor1 }}
      className="services padding-y"
      id="services"
    >
      <div className="section-container">
        <SectionHead mainTitle="Services" />

        <div>
          <div className="card-container">
            {services.map((service, idx) => (
              <Cards key={idx} item={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
