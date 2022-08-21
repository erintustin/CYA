import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import GettingStarted from '../components/GettingStarted';
import About from '../components/About';
import FeaturedResources from '../components/FeaturedResources';


const HomePage = () => {
    return (
        <Container fluid='true'>
            <Header />
            <Welcome />
            <About />
            <GettingStarted />
            <FeaturedResources />
        </Container>
    );
};

export default HomePage;