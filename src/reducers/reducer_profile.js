import { PROFILE_SELECTED } from '../actions/index';


export default function(state = null, action) {
  switch(action.type) {
    case PROFILE_SELECTED:
      console.log('INSIDE REDUCER PROFILE', action.payload);
      return action.payload;
  }
  return state;
}
