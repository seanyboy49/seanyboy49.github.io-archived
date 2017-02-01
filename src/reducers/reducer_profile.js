const INITIAL_STATE = { profile: DEVELOPER, activeProject: null}

export default function(state = INITIAL_STATE, action ) {
  switch(action.type) {
    case DEVELOPER_SELECTED:
      return {state: action}
    default:
      return state;
  }
}
