import {extend} from "./../../utils/utils.js";


const initialState = {
  currentSlide: 0,
};

const ActionType = {
  INCREASE_SLIDE: `INCREASE_SLIDE`,
  REDUCE_SLIDE: `REDUCE_SLIDE`,
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

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
