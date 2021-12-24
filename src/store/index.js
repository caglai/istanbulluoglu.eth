import { configureStore } from '@reduxjs/toolkit'
// import settingsReducer from './settings'
// import userReducer from './user'
// import xratesReducer from './xrates'

const localStorageMiddleware = ({ getState }) => {
    return next => action => {

      const result = next(action);
      // console.log(action, result)

      // if (action.type.startsWith('user/') && action.payload != undefined) {
      //   localStorage.setItem('user', JSON.stringify(getState()["user"]));
      // } else if (action.type.startsWith('xrates/')) {
      //   localStorage.setItem('xrates', JSON.stringify(getState()["xrates"]));
      // }

      return result;
    };
  };
  
const reHydrateStore = () => {
  var state = {};

  // if (localStorage.getItem('user') !== null) {
  //   state.user = JSON.parse(localStorage.getItem('user'))
  // }

  // if (localStorage.getItem('xrates') !== null) {
  //   state.xrates = JSON.parse(localStorage.getItem('xrates'))
  //   state.xrates.loaded = true;
  // }

  return state;
};

export default configureStore({
  reducer: {
      settings: settingsReducer,
      // user: userReducer,
      // xrates: xratesReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
})