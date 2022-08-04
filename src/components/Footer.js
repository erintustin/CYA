import { Container, Row, Col, Media } from 'reactstrap';
import CYAlogo from '../app/assets/img/CYAlogo.png';
import cake from '../app/assets/img/cake.png';

const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col md='2' className='mx-auto my-auto float-left' className='feedback'>
                        <img className='img img-fluid my-auto d-none d-md-flex feedback-logo' src={CYAlogo} />
            
                    </Col>
                    <Col md='6' className='mx-auto my-auto' className='feedback'>
                        <h4>Support This Project With Feedback</h4>
                        <p>Feedback from the autistic community is vital to keeping this toolkit true to its purpose
                         of compiling the best resources to help newly diagnosed and self-diagnosed Autistic 
                         people and their loved ones have a neurodiversity-affirming introduction to the Autistic 
                         neurotype. 
                        </p>
                        <div class="text-center">
                            <button role="button" class="btn btn-light btn-small" data-toggle="modal" 
                            data-target="#feedbackModal">Submit Feedback</button>
                        </div>
                    </Col>
                    <Col md='4' className='mx-auto my-auto'>
                        <h3>
                            Build Your Own Toolkit
                        </h3>
                        <p>Create a custom toolkit using our curated resources or adding your own favorites from the web.</p>
                        <div class="text-center">
                            <button role="button" class="btn btn-dark btn-small" data-toggle="modal" 
                            data-target="#feedbackModal">Start Now</button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            </footer>

    
        



    );
};

export default Footer;