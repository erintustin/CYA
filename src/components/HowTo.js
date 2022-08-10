import { Container, Row, Col } from 'reactstrap';
import autisticagain from '../app/assets/img/autistic-again.png';

const HowTo = () => {
    return(
        <Container fluid='true' className='pl-5 pr-5 pt-2 pb-2' id='howto'>
            <Row>
                <Col className='mx-auto my-auto order-last'>
                <img src={autisticagain}
                     className="img" 
                     alt="a black t-shirt with the text 'Woke Up Autistic Again Today'"
                     />
                </Col>
                <Col md='6' className='mx-auto my-auto'>
                <h1 className="text-center howto">About This Tool Kit</h1>
                    <p className="content">
                        You or your loved one was autistic before diagnosis, and will be autistic every day after.
                        This toolkit seeks to compile the best autistic-authored resources to help you begin to understand the autistic neurotype,
                        and to learn to navigate or to support someone in the world as an autistic person. 
                             <br /><br />
                        A positive understanding of one's neurotype along with a supportive community are building blocks
                        to living a fulfilling autistic life. This toolkit is designed to easily share information and resources
                        with those you are closest to. The hope is to help spread the information necessary to build strong support systems
                        around autistic people, and to empower each other to create neurodiversity-affirming spaces that are safe and welcoming to everyone.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HowTo;