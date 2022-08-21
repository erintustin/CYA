import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import ResourceCard from "./ResourceCard";
import { selectAllResources, selectResourcesByType } from './ResourcesSlice';



const ResourcesList = () => {
    const resources = useSelector(selectAllResources);
    
    console.log('resources:', resources);

    return (
        <Container fluid='true'>
        <Row>
            {resources.map((resource) => {
                return(
                    <Col 
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