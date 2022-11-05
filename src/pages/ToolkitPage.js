import { Container, Row, Col, Button } from 'reactstrap';
import ResourcesList from '../features/Resources/ResourcesList';

const ToolkitPage = () => {
    return (
        <Container fluid='true' className='featured'>
            <Row>
                <Col xs='2' className='mx-auto mt-5'>
            <Button className='btn btn-lg' href='/favorites'>View Favorites</Button>
            </Col>
            </Row>
            <Row>
            <ResourcesList />
            </Row>
        </Container>
    );
};

export default ToolkitPage;