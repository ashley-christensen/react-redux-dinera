import { Container } from 'reactstrap';
import DinesList from '../features/dines/DinesList';
import SubHeader from '../components/SubHeader';

const DinesDirectoryPage = () => {
 return (
  <Container>
   <SubHeader current='Directory' />
   <DinesList />
  </Container>
 );
};

export default DinesDirectoryPage;