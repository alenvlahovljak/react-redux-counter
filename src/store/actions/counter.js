import * as actionTypes from "./actionTypes";

//action creators
export const increment = () => {
   return {
      type: actionTypes.INCREMENT
   };
};

export const decrement = () => {
   return {
      type: actionTypes.DECREMENT
   };
};

export const add = num => {
   return {
      type: actionTypes.ADD,
      payload: { num }
   };
};

export const subtract = num => {
   return {
      type: actionTypes.SUBTRACT,
      payload: { num }
   };
};
