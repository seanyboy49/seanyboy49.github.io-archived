import { PROFILE_SELECTED } from '../actions/index';



export default function(state = 'DEVELOPER', action) {
  console.log('INSIDE REDUCER PROFILE', action);
  switch(action.type) {
    case PROFILE_SELECTED:
      return action.payload;
  }
  return state;
}
