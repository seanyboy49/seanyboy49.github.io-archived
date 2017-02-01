import { PROFILE_SELECTED } from '../actions/index';

const INITIAL_STATE = { profile: 'DEVELOPER' }


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PROFILE_SELECTED:
      return action.payload;
  }
  return state;
}
