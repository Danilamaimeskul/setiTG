import types from '../types';

export const loginRequest = user => ({
  type: types.LOG_IN_REQUESTED,
  payload: user,
});
export const signUpRequest = user => ({
  type: types.SIGN_UP_REQUESTED,
  payload: user,
});
export const logoutAction = user => ({
  type: types.LOG_OUT_REQUESTED,
});
