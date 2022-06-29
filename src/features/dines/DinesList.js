import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap';
import DineCard from './DineCard';
import { selectAllDines } from './dinesSlice';

const DinesList = () => {
 const dines = useSelector(selectAllDines);
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