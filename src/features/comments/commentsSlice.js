import { createSlice } from '@reduxjs/toolkit/';
import { COMMENTS } from '../../app/shared/COMMENTS';

const initialState = {
 commentsArray: COMMENTS
};

const commentsSlice = createSlice({
 name: 'comments',
 initialState,
 reducers: {
  addComment: (state, action) => {
   console.log('addcomment action.payload:', action.payload);
   console.log('addcomment state.commentsArray:', state.commentsArray);
   const newComment = {
    id: state.commentsArray.length + 1,
    //rating, author, commentText
    ...action.payload
   };
   state.commentsArray.push(newComment);
  }
 }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByDineId = (dineId) => (state) => {
 return state.comments.commentsArray.filter((comment) => comment.dineId === parseInt(dineId));
};

