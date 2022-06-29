import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByDineId } from './commentsSlice';
import CommentForm from './CommentForm';


const CommentsList = ({ dineId }) => {
 const comments = useSelector(selectCommentsByDineId(dineId));

 if (comments && comments.length > 0) {
  return (
   <Col md='5' className='m-1'>
    <h4>Comments</h4>
    {comments.map((comment) => {
     return <Comment key={comment.id} comment={comment} />;
    })}
    <CommentForm dineId={dineId} />
   </Col>
  );
 }

 return (
  <Col md='5' className='m-1'>
   There are no comments for this campsite yet.
  </Col>
 );


};

export default CommentsList;