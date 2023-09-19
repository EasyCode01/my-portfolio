import React from "react";
import SectionHead from "../../components/SectionHead";
import { myAboutImage2 } from "../../assests/images";
import { socialMediaIcons } from "../../constants";
import { useAppContext } from "../../context/context";

const AboutMe = () => {
  let { dispatch, state } = useAppContext();
  let { isLightTheme, light, dark } = state;

  return (
    <section
      style={{ background: isLightTheme ? light.mainColor2 : dark.mainColor2 }}
      id="about-me"
      className="about-me padding-y"
    >
      <div className="section-container">
        <SectionHead mainTitle="About me" />

        <div className="about-me-content">
          <div className="about-me-content-left">
            <div className="about-me-frame">
              <img
                style={{ maxWidth: "100%" }}
                src={myAboutImage2}
                alt="my about image"
              />
              <ul className="social-media-links">
                {socialMediaIcons.map((icon, idx) => (
                  <li className="" key={idx} title={icon.title}>
                    <span>{icon.icon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-me-content-right">
            <div>
              <div>
                <div
                  style={{
                    color: isLightTheme ? dark.mainColor1 : light.mainColor1,
                  }}
                  className="label"
                >
                  I'm Ezekiel Oyedijo
                </div>
                <div
                  style={{
                    wordSpacing: "3px",
                    color: isLightTheme ? dark.mainColor1 : light.mainColor1,
                  }}
                  className="small-label"
                >
                  A FRONTEND <span style={{ color: light.cta }}> ENGINEER</span>{" "}
                  based in <span style={{ color: light.cta }}>Lagos</span>
                </div>
              </div>

              <p
                className="text"
                style={{
                  textAlign: "justify",
                  color: isLightTheme ? dark.mainColor1 : light.mainColor1,
                }}
              >
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </p>

              <div className="personal-details">
                <ul>
                  <li>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="field small-label"
                    >
                      Residence
                    </span>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="value small-text"
                    >
                      Nigeria
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="field small-label"
                    >
                      Address
                    </span>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="value text"
                    >
                      Ajah, Lagos
                    </span>
                  </li>
                </ul>

                <ul>
                  <li>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="field small-label"
                    >
                      E-mail
                    </span>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="value small-text"
                    >
                      ezekielayodele1@gmail.com
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="field small-label"
                    >
                      Phone
                    </span>
                    <span
                      style={{
                        color: isLightTheme
                          ? dark.mainColor1
                          : light.mainColor1,
                      }}
                      className="value text"
                    >
                      07064655983
                    </span>
                  </li>
                </ul>
              </div>

              <button style={{ alignSelf: "flex-start" }} className="btn-fill">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
