import {call, put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import types from '../types';

// function* registerUser(action) {
//   try {
//     const {email, password, image} = action.payload;
//     const user = yield call(UserAPI.register, action.payload);
//     yield call(FirebaseAPI.uploadImage, image);
//     const imageLink = yield call(FirebaseAPI.linkImage);
//     yield call(LastUserAPI.setUser, {email, password, darkTheme: false});
//     yield put({type: types.CHANGE_DARK_THEME, payload: false});
//     yield put({
//       type: types.SIGN_UP_SUCCEEDED,
//       payload: {imageLink, ...user},
//     });
//   } catch (e) {
//     yield put({type: types.SIGN_UP_FAILED});
//   }
// }

// function* loginUser(action) {
//   try {
//     const {email, password} = action.payload;
//     const user = yield call(UserAPI.login, action.payload);
//     if (user) {
//       const lastUser = yield call(LastUserAPI.getUser);
//       const darkTheme = lastUser?.email === email && lastUser.darkTheme;
//       yield put({type: types.CHANGE_DARK_THEME, payload: darkTheme});
//       const imageLink = yield call(FirebaseAPI.linkImage);
//       yield call(LastUserAPI.setUser, {email, password, darkTheme});
//       yield put({
//         type: types.LOG_IN_SUCCEEDED,
//         payload: {imageLink, ...user},
//       });
//     } else {
//       yield put({type: types.LOG_IN_FAILED});
//     }
//   } catch (e) {
//     console.error(e);
//     yield put({type: types.LOG_IN_FAILED});
//   }
// }

// function* failedLogin() {
//   try {
//     Alert.alert('Wrong email or password', null, [
//       {
//         text: 'Ok',
//         style: 'default',
//       },
//     ]);
//   } catch (e) {}
// }

// function* logOut() {
//   try {
//     yield call(FirebaseAPI.logout);
//     yield put({type: types.LOG_OUT});
//   } catch (e) {}
// }

// function* changeTheme(action) {
//   try {
//     const {email, password} = yield call(LastUserAPI.getUser);
//     yield call(LastUserAPI.setUser, {
//       email,
//       password,
//       darkTheme: action.payload,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

export default function* rootSaga() {
  //   yield takeLatest(types.SIGN_UP_REQUESTED, registerUser);
  //   yield takeLatest(types.LOG_IN_REQUESTED, loginUser);
  //   yield takeLatest(types.LOG_IN_FAILED, failedLogin);
  //   yield takeLatest(types.LOG_OUT_REQUESTED, logOut);
  //   yield takeLatest(types.CHANGE_DARK_THEME, changeTheme);
}
