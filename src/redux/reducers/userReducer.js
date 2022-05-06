import types from '../types';

const initialState = {
  user: {
    isLogin: false,
    userData: null,
  },
};

const userReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SIGN_UP_REQUESTED:
      return {...state};
    case types.SIGN_UP_SUCCEEDED:
      return {
        ...state,
        user: {...state.user, isLogin: true, userData: payload},
      };
    case types.SIGN_UP_FAILED:
      return {
        ...state,
        user: {...state.user, isLogin: false, userData: 'Error'},
      };
    case types.LOG_IN_REQUESTED:
      return {...state};
    case types.LOG_IN_SUCCEEDED:
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: true,
          userData: {...payload},
        },
      };
    case types.LOG_IN_FAILED:
      return {
        ...state,
        user: {...state.user, isLogin: false, userData: 'Error'},
      };
    case types.LOG_OUT: {
      return {
        ...state,
        user: {...state.user, isLogin: false, userData: null},
      };
    }
    default:
      return state;
  }
};

export default userReducer;
