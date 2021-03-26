import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getCars = (state) => {
  return state[NAME_SPACE].cars;
};
