import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profile';
import ActiveCardReducer from './reducer_activeCard';

const rootReducer= combineReducers({
  profile: ProfileReducer,
  activeCard: ActiveCardReducer
})

export default rootReducer;
