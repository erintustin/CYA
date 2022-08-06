import { Container, Row, Col } from 'reactstrap';
import cake from '../app/assets/img/cake.png';

const Welcome = () => {
    return(
        <Container fluid='true' className='pl-5 pr-5' id='welcome' >
            <Row>
                <Col md='2' className='mx-auto order-last order-md-first'>
                <img src={cake}
                     className="img my-auto" 
                     alt="a rainbow birthday-cake shaped pop-it fidget tool"
                     />
                </Col>
                <Col md='6' className='mx-auto'>
                    <h1 class="text-center congrats">Congratulations!</h1>
                    <p class="content mx-auto p-2">If you’re visiting this page maybe you were recently diagnosed as autistic, 
                                    or come to the realization on your own. You may have been told that someone 
                                    you know or care about is autistic. For any of the above, Congratulations! 
                                    You have been given a wonderful opportunity to better get to know yourself or 
                                    someone you love. <br /><br />

                                    Understanding Autism through the lens of Neurodiversity is an important first 
                                    step and something to be celebrated! This toolkit seeks to provide streamlined 
                                    access to some of the best online resources about the autistic experience as 
                                    told by the true experts—autistic people. <br /> <br />
                                    
                                    Autistic people deserve to be loved and accepted just as they are. This toolkit is not
                                    designed to fix Autistic people, but to fix the way people think about us. Welcome to the Autistic Community! 
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;