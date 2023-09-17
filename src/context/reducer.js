export const TOGGLE_LIGHT = "TOGGLE_LIGHT";
export const OPEN_MENU = "OPEN_MENU";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return {
        ...state,
        isLightTheme: action.payload,
      };
    case OPEN_MENU:
      return {
        ...state,
        openMenu: action.payload,
      };
    default:
      return state;
  }
};
