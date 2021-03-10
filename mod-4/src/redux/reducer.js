import { actionTypes } from './actions';

export function reducer(state = { jokes: [] }, action) {
  console.log(action, state);

  switch (action.type) {
    case actionTypes.loadJokes:
      //   state.jokes = action.payload;
      return { ...state, jokes: action.payload };
    case 'demo':
    //   return {
    //     ...state,
    //     person: {
    //       ...state.person,
    //       adress: { ...state.person.adress, city: action.payload },
    //     },
    //   };
    // state.person.address.city = action.payload
    default:
      return state;
  }
}
