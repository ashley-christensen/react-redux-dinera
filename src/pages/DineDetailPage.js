import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectDineById } from '../features/dines/dinesSlice';
import DineDetail from '../features/dines/DineDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const DineDetailPage = () => {
 const { dineId } = useParams();
 const dine = useSelector(selectDineById(dineId));

 const isLoading = useSelector((state) => state.dines.isLoading);
 const errMsg = useSelector((state) => state.dines.errMsg);
 let content = null;

 if (isLoading) {
  content = <Loading />;
 } else if (errMsg) {
  content = <Error errMsg={errMsg} />;
 } else {
  content = (
   <>
    <DineDetail dine={dine} />
    <CommentsList dineId={dineId} />
   </>
  );
 }

 return (
  <Container>
   {dine && <SubHeader current={dine.name} detail={true} />}
   <Row>{content}</Row>
  </Container>
 );
};

export default DineDetailPage;