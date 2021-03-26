import {extend} from "./../../utils/utils.js";

const initialState = {
  cars: [],
};

const ActionType = {
  LOAD_CARS: `LOAD_CARS`,
};

const ActionCreator = {
  loadCars: (cars) => {
    return {
      type: ActionType.LOAD_CARS,
      payload: cars,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CARS:
      return extend(state, {cars: action.payload,}
      );
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
