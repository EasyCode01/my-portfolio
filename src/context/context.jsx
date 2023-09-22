import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const Context = createContext();

const initialState = {
  isLightTheme: localStorage.getItem("isLightTheme")
    ? JSON.parse(localStorage.getItem("isLightTheme"))
    : true,
  openMenu: false,
  light: {
    mainColor1: "#fff",
    mainColor2: "#eaedf2",
    whiteColor: "#fff",
    bigHeading: "#090a0c",
    mainText: "#5a5a64",
    cta: "#d9832e",
    bgHeroRight: "#fbfbfb",
    bgHeroleft: "#fcfcfc",
    projectTextColor: "#fff",
  },
  dark: {
    mainColor1: "#1F2937",
    mainColor2: "#1f2937",
    darkColor: "#1f2937",
    bigHeading: "#fff",
    mainText: "#fff",
    projectTextColor: "#767676",
  },
  activeSection: "home",
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
