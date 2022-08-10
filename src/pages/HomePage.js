import { Container } from 'reactstrap';
import Welcome from '../components/Welcome';
import HowTo from '../components/HowTo';
import GetStarted from '../components/GetStarted';


const HomePage = () => {
    return (
        <Container fluid='true'>
            <Welcome id='welcome'/>
            <HowTo />
            <GetStarted />
        </Container>
    );
};

export default HomePage;