import { PROFILE_SELECTED } from '../actions/index';



export default function(state = 'Developer', action) {
  console.log('INSIDE REDUCER PROFILE', action.payload);
  switch(action.type) {
    case PROFILE_SELECTED:
      return { state: action.payload};
  }
  return state;
}
