import { Container, Button } from 'reactstrap';
import FeaturedResources from './FeaturedResources';

const GetStarted = () => {
    return(
        <Container fluid='true' id='getstarted'>
            <h1 class="text-center congrats mb-5">Let's Get Started! </h1>
            <FeaturedResources />
        <Button>View All</Button>
        </Container>
    );
};

export default GetStarted;