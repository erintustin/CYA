import { Container, Row, Col, Button } from 'reactstrap';
import squishmallow from '../app/assets/img/squishmallow.png';

const HowTo = () => {
    return(
        <Container fluid='true' className='pl-5 pr-5' id='howto'>
            <Row>
                <Col md='2' className='mx-auto my-auto order-last order-md-first'>
                <a href='https://www.amazon.com/Squishmallows-Official-Kellytoy-Squishy-Animals/dp/B09RHM739Q/ref=pd_lpo_1?pd_rd_i=B09RHM739Q&psc=1' target='new_window'>
                    <img src={squishmallow}
                    width='300'
                    alt="a Squishmallow Axolotl Plush with Balloon"
                     /></a>
                </Col>
                <Col md='6' className='mx-auto'>
                    <h3 className="text-center congrats">Getting Started</h3>
                    <p className="content mx-auto p-2">
                        This toolkit compiles some of the best content on the web about what it means to be autistic. 
                        Resources are organized onto cards that can be filtered by topic or type. 
                        Once you've read a resource you can mark it as read, add personal notes, and/or share it with others.
                            <br /> <br />
                        You can also add your favorite resources to start building your own personalized toolkit. Educating 
                        our support systems and our communities about neurodiversity is vital, but it can also be tedious and 
                        exhausting. Building your own toolkit will provide you with a personalized list of the resources 
                        most pertinent to how you or your loved one exists in the world as an autistic person. Your personal
                        toolkit can then be shared with those on a need-to-know basis so they can learn how to best support you. 
                            <br /> <br />
                        This toolkit is designed to help you learn about neurodiversity, but it's also designed
                        to help others help you, and to create a more supportive and affirming world 
                        where you can truly celebrate being autistic.  
                    </p>
                    <Button 
                        id='getstarted'
                        className='btn-info btn-lg'
                        href='/toolkit/'>Let's Get Started!
                    </Button>
                </Col>
            </Row>
    
        </Container>
    );
};


export default HowTo;