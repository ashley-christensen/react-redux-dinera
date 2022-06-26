
import { Col, Row } from 'reactstrap';
import DineCard from './DineCard';
import { selectAllDines } from './dineSlice';

const DinesList = () => {
 const dines = selectAllDines();
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