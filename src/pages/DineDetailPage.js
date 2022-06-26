import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectDineById } from '../features/dines/dineSlice';
import DineDetail from '../features/dines/DineDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const DineDetailPage = () => {
 const { dineId } = useParams();
 const dine = selectDineById(dineId);

 return (
  <Container>
   <SubHeader current={dine.name} detail={true} />
   <Row>
    <DineDetail dine={dine} />
    <CommentsList dineId={dineId} />
   </Row>
  </Container>
 );
};

export default DineDetailPage;