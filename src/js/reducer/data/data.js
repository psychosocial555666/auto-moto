import {extend} from "./../../utils/utils.js";

const initialState = {
  cars: [],
};

const ActionType = {
  LOAD_CARS: `LOAD_CARS`,
  ADD_NEW_REVIEW: `ADD_NEW_REVIEW`,
};

const ActionCreator = {
  loadCars: (cars) => {
    return {
      type: ActionType.LOAD_CARS,
      payload: cars,
    };
  },
  addNewReview: (review) => {
    return {
      type: ActionType.ADD_NEW_REVIEW,
      payload: review,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CARS:
      return extend(state, {cars: action.payload,}
      );

    case ActionType.ADD_NEW_REVIEW:
      return extend(state, {cars: action.payload,}
      );
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
