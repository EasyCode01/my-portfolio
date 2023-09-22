export const TOGGLE_LIGHT = "TOGGLE_LIGHT";
export const OPEN_MENU = "OPEN_MENU";
export const SET_ACTIVE_SECTION = "SET_ACTIVE_SECTION";

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
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.payload,
      };
    default:
      return state;
  }
};
