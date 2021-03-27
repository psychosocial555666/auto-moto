import NameSpace from "../name-space";


const NAME_SPACE = NameSpace.UI;

export const getCurrentSlide = (state) => {
  return state[NAME_SPACE].currentSlide;
};

export const getCurrentTab = (state) => {
  return state[NAME_SPACE].currentTab;
};
