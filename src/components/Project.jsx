import React from "react";
import { myAboutImage3 } from "../assests/images";
import { useAppContext } from "../context/context";

const Project = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <div className="project">
      <div
        style={{ color: isLightTheme ? dark.mainColor1 : light.mainColor1 }}
        className="project-title"
      >
        Youtube Clone App
      </div>
      <img src={myAboutImage3} alt="" />
      <p
        style={{ color: isLightTheme ? dark.mainText : light.mainText }}
        className="text"
      >
        Explore and enjoy a familiar video-sharing experience with the YouTube
        Clone App. Watch an extensive collection of videos, discover trending
        content, and interact with the YouTube community.
      </p>
      <ul>
        <li>React</li>
        <li>Material UI</li>
      </ul>
      <div>
        <div className="github-link">
          <span>Source Code</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31a4.413 4.413 0 0 0 .21-.76a5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45a12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77a4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39a4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413a1.179 1.179 0 0 1-.17-.112a1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
