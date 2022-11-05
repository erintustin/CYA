import { Container, Button } from 'reactstrap';
import FeaturedResourcesList from './FeaturedResourcesList';

const FeaturedResources = () => {
    return(
        <Container fluid='true' className='pl-5 pr-5 pt-0 pb-2 featured' id='featured'>
            <h3 class="text-center mb-5 featured-heading">Get started with these Featured Resources</h3>
            <FeaturedResourcesList />
        <Button className='pb-10' href='/toolkit/'>View All Resources</Button>
        </Container> 
    );
};

export default FeaturedResources;