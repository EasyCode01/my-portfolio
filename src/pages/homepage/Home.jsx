import React from "react";
import Sidebar from "../../components/Sidebar";
import HeroSection from "./HeroSection";
import "./style.css";
import { useAppContext } from "../../context/context";
import Navbar from "../../components/Navbar";
import AboutMe from "./AboutMe";
import MySkills from "../../components/MySkills";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = () => {
  let { state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{
        background: theme.mainColor1,
        transition: "all 400ms ease",
        width: "100%",
      }}
      className="home"
    >
      <Navbar />
      <Sidebar />
      <main className="hero-main">
        <HeroSection />
        <AboutMe />
        <MySkills />
        <Services />
        <Portfolio />
      </main>
      ;
    </div>
  );
};

export default Home;
