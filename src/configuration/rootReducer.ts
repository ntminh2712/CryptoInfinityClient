import appReducer from '@/redux/slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
