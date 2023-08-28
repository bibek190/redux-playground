import { useDispatch } from "react-redux";
import { combineReducers, createStore } from "redux";
import redux from "redux";
import { bindActionCreators } from "redux";
import { produce } from "immer";

const initialState = {
  name: "bibek",
  address: {
    street: "112 main st",
    city: "bruce",
    state: "WA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());
