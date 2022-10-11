import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import ResourceCard from "./ResourceCard";
import { selectAllResources, selectResourcesByType } from './ResourcesSlice';



const ResourcesList = () => {
    const resources = useSelector(selectAllResources);

    return (
        <Container  className='p-5'>
        <Row>
            {resources.map((resource) => {
                return(
                    <Col md='4'
                        sm ='6'
                        className='mt-2 mb-2' 
                        key={resource.id}>
                        <ResourceCard resource={resource} />
                    </Col>
                );
            })}
        </Row>
        </Container>
        )
}

export default ResourcesList;