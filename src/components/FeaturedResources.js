import { Container, Button } from 'reactstrap';
import FeaturedResourcesList from './FeaturedResourcesList';

const FeaturedResources = () => {
    return(
        <Container fluid='true' className='pl-5 pr-5 pt-5 pb-2'>
            <h3 class="text-center mb-5">Get started with these Featured Resources</h3>
            <FeaturedResourcesList />
        <Button href='/toolkit/'>View All Resources</Button>
        </Container>
        
    );
};

export default FeaturedResources;