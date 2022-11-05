import { Container, Row, Col, Button, Media } from 'reactstrap';
import Feedback from './Feedback';


const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col md='8' className='mx-auto my-auto'>
                        <Feedback />
                    </Col>
                    <Col className='mx-auto my-auto order-first order-md-last'>
                        <h3>
                            Build Your Own Toolkit
                        </h3>
                        <h6>Coming Soon!</h6>
                        <p className='mx-auto p-2'>Use the mobile app to create a custom toolkit to share with your support system using our curated resources and adding your own favorites from the web.</p>
                        <div class="text-center">
                            <Button className="btn btn-dark btn-small" href='https://www.loom.com/share/ffc72ff6967844c9a1f8c5e29746c24a'
                            data-target="new_window">Watch a Demo</Button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            </footer>

    
        



    );
};

export default Footer;