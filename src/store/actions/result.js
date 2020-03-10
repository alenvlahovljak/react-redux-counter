import * as actionTypes from "./actionTypes";

export const saveResult = result => {
   //we can transform data
   const updatedResult = result * 2;
   return {
      type: actionTypes.STORE_RESULT,
      payload: { result: updatedResult }
   };
};

export const storeResult = result => {
   return (dispatch, getState) => {
      setTimeout(() => {
         //get old state
         const oldCounter = getState().ctr.counter;
         console.log("oldCounter = " + oldCounter);
         dispatch(saveResult(result));
      }, 2000);
   };
};

export const deleteResult = id => {
   return {
      type: actionTypes.DELETE_RESULT,
      payload: { id }
   };
};
