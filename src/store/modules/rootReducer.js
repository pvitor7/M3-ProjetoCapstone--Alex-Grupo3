import { combineReducers } from 'redux';
import userSignIn from './userSignIn/reducer';
import userSignUp from './userSignUp/reducer';

import userReducer from './user/reducer';
import dataPlantsReducer from './plants/reducer';

export default combineReducers({
  userSignIn,
  userSignUp,
  userPlants: dataPlantsReducer,
  userRegister: userReducer,
});