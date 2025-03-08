import { ACTIVE_TAP } from "./action";

const initialState = {
  activeTab: 'home'
}

export const rootReducer =(state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_TAP:
      return {...state, activeTab: action.payload}
    default:
      return state;
  }
}