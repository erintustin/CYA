import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import HowTo from '../components/HowTo';
import About from '../components/About';
import GetStarted from '../components/GetStarted';


const HomePage = () => {
    return (
        <Container fluid='true'>
            <Header />
            <Welcome />
            <About />
            <HowTo />
            <GetStarted />
        </Container>
    );
};

export default HomePage;