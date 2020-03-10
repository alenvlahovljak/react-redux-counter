import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
   results: []
};

const deleteResult = (state, action) => {
   const newState = state.results.filter(
      result => result.id !== action.payload.id
   );
   return updateObject(state, { results: newState });
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.STORE_RESULT:
         return updateObject(state, {
            results: [
               ...state.results,
               { id: new Date(), value: action.payload.result }
            ]
         });
      /*return {
            ...state,
            //results: state.results.concat(state.counter)
            results: [
               ...state.results,
               { id: new Date(), value: action.payload.result }
            ]
         };*/
      case actionTypes.DELETE_RESULT:
         return deleteResult(state, action);
      default:
         return state;
   }
};

export default reducer;
