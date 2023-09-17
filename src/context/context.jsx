import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const Context = createContext();

const initialState = {
  isLightTheme: true,
  openMenu: false,
  light: {
    mainColor1: "#fff",
    mainColor2: "#eaedf2",
    bigHeading: "#090a0c",
    mainText: "#5a5a64",
    cta: "#d9832e",
    bgHeroRight: "#fbfbfb",
    bgHeroleft: "#fcfcfc",
  },
  dark: {
    mainColor1: "#1F2937",
    mainColor2: "#1f2937",
    bigHeading: "#fff",
    mainText: "#fff",
  },
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
