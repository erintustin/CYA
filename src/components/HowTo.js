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
                        Autism isn't something you "get" and there is no "cure". You or your loved one was autistic before diagnosis, and will be autistic every day after.
                        This toolkit seeks to clear up common misconceptions many people have about autism and to help you begin to truly
                        understand and appreciate the autistic neurotype. Rather than inspire fear, dread, or grief, this toolkit seeks to provide 
                        knowledge to help you learn to navigate the world as or to support someone in the world as an autistic person. 
                             <br /><br />
                        A positive understanding of one's neurotype along with a supportive community are building blocks
                        to living a fulfilling autistic life. This toolkit is designed to easily share information and resources
                        with those you are closest to. The goal is to spread accurate information about the autistic experience that can help build strong support systems
                        around autistic people, and to empower our communities to be neurodiversity-affirming spaces that are safe and accomodating to everyone.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HowTo;