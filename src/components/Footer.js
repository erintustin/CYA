import { Container, Row, Col, Media } from 'reactstrap';
import feedbacklogo from '../app/assets/img/feedbacklogo.png';


const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col md='8' className='mx-auto my-auto'>
                        <Media left top className='row feedback'>
                            <Media object 
                                    className='img my-auto col-4'
                                    id='feedback-logo' 
                                    src={feedbacklogo} 
                                    alt='a colorful brain with a thought bubble coming out of it'/>
                            
                            <Media body className='col-8'>
                                <h4>Support This Project With Feedback</h4>
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
                    <Col md='4' className='mx-auto my-auto'>
                        <h3>
                            Build Your Own Toolkit
                        </h3>
                        <p>Create a custom toolkit to share with your support system using our curated resources and even adding your own favorites from the web.</p>
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