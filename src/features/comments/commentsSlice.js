import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByDineId = (dineId) => {
 return COMMENTS.filter((comment) => comment.dineId === parseInt(dineId));
};


export const selectAllComments = () => {
 return COMMENTS;
};