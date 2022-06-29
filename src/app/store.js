import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { dinesReducer } from '../features/dines/dinesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
// import { useReducer } from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    dines: dinesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    // user: userReducer
  },
  // middleware: (getDefualtMiddleware) => getDefaultMiddleware().concat([logger]);
});
