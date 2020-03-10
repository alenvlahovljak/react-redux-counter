import * as actionTypes from "../actions";

const initialState = {
   results: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.STORE_RESULT:
         return {
            ...state,
            //results: state.results.concat(state.counter)
            results: [
               ...state.results,
               { id: new Date(), value: action.payload.result }
            ]
         };
      case actionTypes.DELETE_RESULT:
         const newState = state.results.filter(
            result => result.id !== action.payload.id
         );
         return { ...state, results: newState };
      default:
         return state;
   }
};

export default reducer;
