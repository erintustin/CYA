import { Container, Button } from 'reactstrap';
import FeaturedResources from './FeaturedResources';

const GetStarted = () => {
    return(
        <Container fluid='true' className='pl-5 pr-5 pt-5 pb-2'>
            <h3 class="text-center mb-5">Top Resources</h3>
            <FeaturedResources />
        <Button href='/toolkit/'>View All</Button>
        </Container>
        
    );
};

export default GetStarted;