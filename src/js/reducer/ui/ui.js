import {TabType} from "../../const.js";
import {extend} from "./../../utils/utils.js";


const initialState = {
  currentSlide: 0,
  currentTab: TabType.REVIEWS,
  isModalOpened: false,
};

const ActionType = {
  INCREASE_SLIDE: `INCREASE_SLIDE`,
  REDUCE_SLIDE: `REDUCE_SLIDE`,
  SET_CURRENT_TAB: `SET_CURRENT_TAB`,
};

const ActionCreator = {
  increaseSlide: (slide) => ({
    type: ActionType.INCREASE_SLIDE,
    payload: slide += 1,
  }),
  reduceSlide: (slide) => ({
    type: ActionType.REDUCE_SLIDE,
    payload: slide -= 1,
  }),
  setCurrentTab: (tab) => ({
    type: ActionType.SET_CURRENT_TAB,
    payload: tab,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_SLIDE:
      return extend(state, {
        currentSlide: action.payload,
      });

    case ActionType.REDUCE_SLIDE:
      return extend(state, {
        currentSlide: action.payload,
      });

    case ActionType.SET_CURRENT_TAB:
      return extend(state, {
        currentTab: action.payload,
      });

    default:
      return state;
  }
};

export { reducer, ActionType, ActionCreator };
