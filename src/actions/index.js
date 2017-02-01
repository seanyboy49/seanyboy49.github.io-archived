
export const ACTIVECARD_SELECTED = 'ACTIVECARD_SELECTED';
export const PROFILE_SELECTED = 'PROFILE_SELECTED';

export function selectProfile(profile) {
  // selectProfile is an ActionCreator that needs to return an action
  // and an object with a type property
  return {
    type: PROFILE_SELECTED,
    payload: profile
  };
}
