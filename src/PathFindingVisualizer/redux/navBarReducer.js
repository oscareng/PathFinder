const TOGGLE_SETTINGS_MENU = "TOGGLE_SETTINGS_MENU";
const TOGGLE_ACTIVE_MENU = "TOGGLE_ACTIVE_MENU";
const TOGGLE_SELECTOR_MENU = "TOGGLE_SELECTOR_MENU";
const TOGGLE_ALGO = "TOGGLE_ALGO";
const SET_HEX = "SET_HEX";
const TOGGLE_MAZE = "TOGGLE_MAZE";
const ANIMATION_ACTIVE = "ANIMATION_ACTIVE";

const initialState = {
  ActiveSettingsMenu: "main",
  SelectorMenuStatus: false,
  SettingsMenuStatus: false,
  algo: "none",
  hex: "wall",
  maze: "none",
  animation: false,
};

const _setHex = (hex) => ({
  type: SET_HEX,
  hex,
});

export const setHex = (hex) => (dispatch) => {
  dispatch(_setHex(hex));
};
const _setActiveMenu = (menu) => ({
  type: TOGGLE_ACTIVE_MENU,
  ActiveSettingsMenu: menu,
});

export const setActiveMenu = (menu) => (dispatch) => {
  dispatch(_setActiveMenu(menu));
};

const _toggleMenu = (boolean) => ({
  type: TOGGLE_SETTINGS_MENU,
  SettingsMenuStatus: boolean,
});

export const toggleMenu = (boolean) => (dispatch) => {
  dispatch(_toggleMenu(boolean));
};

const _toggleSelectorMenu = (boolean) => ({
  type: TOGGLE_SELECTOR_MENU,
  SelectorMenuStatus: boolean,
});

export const toggleSelectorMenu = (boolean) => (dispatch) => {
  dispatch(_toggleSelectorMenu(boolean));
};

const _setAlgorithim = (key) => ({
  type: TOGGLE_ALGO,
  algo: key,
});

export const setAlgorithim = (key) => (dispatch) => {
  if (key === "astar") {
    dispatch(_setAlgorithim(key));
  } else if (key === "dijkstra") {
    dispatch(_setAlgorithim(key));
  } else if (key === "breadthFirstSearch") {
    dispatch(_setAlgorithim(key));
  } else if (key === "none") {
    dispatch(_setAlgorithim(key));
  } else {
    console.log(`setAlgo thunk error!`);
  }
};

const _setMaze = (key) => ({
  type: TOGGLE_MAZE,
  maze: key,
});

export const setMaze = (key) => (dispatch) => {
  if (key === "DFS") {
    dispatch(_setMaze(key));
  } else if (key === "prim") {
    dispatch(_setMaze(key));
  } else if (key === "none") {
    dispatch(_setMaze(key));
  } else {
    console.log(`setMaze thunk error`);
  }
};

const _animationActive = (key) => ({
  type: ANIMATION_ACTIVE,
  animation: key,
});

export const setAnimationActive = (boolean) => (dispatch) => {
  dispatch(_animationActive(boolean));
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS_MENU:
      return { ...state, SettingsMenuStatus: action.SettingsMenuStatus };
    case TOGGLE_ACTIVE_MENU:
      return { ...state, ActiveSettingsMenu: action.ActiveSettingsMenu };
    case TOGGLE_SELECTOR_MENU:
      return { ...state, SelectorMenuStatus: action.SelectorMenuStatus };
    case TOGGLE_ALGO:
      return { ...state, algo: action.algo };
    case TOGGLE_MAZE:
      return { ...state, maze: action.maze };
    case SET_HEX:
      return { ...state, hex: action.hex };
    case ANIMATION_ACTIVE:
      return { ...state, animation: action.animation };
    default:
      return state;
  }
}
