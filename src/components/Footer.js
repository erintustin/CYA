import { Container, Row, Col, Media } from 'reactstrap';
import feedbacklogo from '../app/assets/img/feedbacklogo.png';


const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col md='8' className='mx-auto my-auto'>
                        <Media className='row feedback'>
                            <Media object 
                                    className='img my-auto mx-auto col-md-4'
                                    id='feedback-logo' 
                                    src={feedbacklogo} 
                                    alt='a colorful brain with a thought bubble coming out of it'/>
                            
                            <Media body className=' my-auto mx-auto col-md-8'>
                                <h3 id='feedback-heading'>Support This Project With Feedback</h3>
                                <p>Feedback from the autistic community is vital to keeping this toolkit true to its purpose
                                of compiling the best resources to help newly diagnosed and self-diagnosed Autistic 
                                people and their loved ones have a neurodiversity-affirming introduction to the Autistic 
                                neurotype. 
                                </p>
                                <div class="text-center">
                                    <button className="btn btn-light btn-small" data-toggle="modal" 
                                    data-target="#feedbackModal">Submit Feedback</button>
                                </div>
                            </Media>
                        </Media>
                    </Col>
                    <Col className='mx-auto my-auto order-first order-md-last'>
                        <h3>
                            Build Your Own Toolkit
                        </h3>
                        <p className='mx-auto p-2'>Create a custom toolkit to share with your support system using our curated resources and even adding your own favorites from the web.</p>
                        <div class="text-center">
                            <button className="btn btn-dark btn-small" data-toggle="modal" 
                            data-target="#feedbackModal">Start Now</button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            </footer>

    
        



    );
};

export default Footer;