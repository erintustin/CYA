import { Container, Row, Col, Button } from 'reactstrap';
import ResourcesList from '../features/Resources/ResourcesList';

const ToolkitPage = () => {
    return (
        <Container fluid='true' className='confetti'>
            <Row>
                <Col xs='4' className='mx-auto mt-5'>
                    <Button className='btn btn-lg' href='/toolkit'>View All Resources</Button>
                </Col>
            </Row>
            <Row>
                <Col className='featured-heading p-5 mx-auto' xs='8' md='6'>
                    <h1>When this feature becomes available, favorites will appear here.</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default ToolkitPage;