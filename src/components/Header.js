import headerIcon1 from '../app/assets/img/headerIcon1.png';
import headerIcon2 from '../app/assets/img/headerIcon2.png';
import headerIcon3 from '../app/assets/img/headerIcon3.png';
import CYAlogo from '../app/assets/img/CYAlogo.png';
import { Container, Row, Col, Button } from 'reactstrap';



const Header = () => {
    return (
        <>
        <Container className='jumbotron jumbotron-top jumbotron-fluid' fluid='true'>
            <Row>
                <Col md='6' className='my-auto title text-center order-last order-md-first p-5 m-5'>
                        <h1>Congrats, You're Autistic!</h1>
                        <h3>a Neurodiversity-Affirming Online Tool Kit</h3>
                        <Button className='btn btn-sm btn-info'>Get Started</Button>
                    
                </Col>
                <Col>
                <img className='img img-fluid logo-header' src={CYAlogo} alt='logo'/>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className='mb-0'>
                <Col sm='4' className='header-card'>
                    <img src={headerIcon1} alt='headericon1'/>
                    <h6 className="text-center">
                         Ending Myths and Stereotypes</h6>
                     <p className='p-0 text-left'>
                         Autism has been misrepresented by the medical community,
                         in the media, and by charitable organizations.</p>
                </Col>
                <Col sm='4' className='header-card'>
                    <img src={headerIcon2} alt='headericon2'/>
                    <h6 className="text-center">
                        Nothing About Us Without Us</h6>
                    <p className="text-left">
                         Resources written by the #1 experts on the autistic 
                         experience--autistic people.</p>
                </Col>
                <Col sm='4' className='header-card'>
                    <img src={headerIcon3} alt='headericon3' />
                    <h6 class="media-header text-center">
                        Celebrating Neurodiversity</h6>
                    <p class="text-left">
                        Autism is a developmental disability--and
                        disability is a natural part of human diversity.</p>
                </Col>
            </Row>
        </Container>
        </>
    
    );

};

export default Header;

