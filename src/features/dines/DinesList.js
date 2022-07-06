import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import DineCard from './DineCard';
import { selectAllDines } from './dinesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DinesList = () => {
 const dines = useSelector(selectAllDines);
 console.log('dines:', dines);

 const isLoading = useSelector((state) => state.dines.isLoading);
 const errMsg = useSelector((state) => state.dines.errMsg);

 if (isLoading) {
  return (
   <Row>
    <Loading />
   </Row>
  );
 }

 if (errMsg) {
  return (
   <Row>
    <Error errMsg={errMsg} />
   </Row>
  );
 }

 return (
  <Row className='ms-auto'>
   {dines.map((dine) => {
    return (
     <Col md='5' className='m-4' key={dine.id}>
      <DineCard dine={dine} />
     </Col>
    );
   })}
  </Row>
 );
};

export default DinesList;