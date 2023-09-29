
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../component';

 const store=configureStore({
      reducer:rootReducer,
});
export default store;
