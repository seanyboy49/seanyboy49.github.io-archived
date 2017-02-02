import { PROFILE_SELECTED } from '../actions/index';
const DEVELOPER = 'Developer'

export default function(state = DEVELOPER, action) {
  switch(action.type) {
    case PROFILE_SELECTED:
      return action.payload;
  }
  return state;
}
