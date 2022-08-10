import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ResourceCard from "./ResourceCard";
import { selectAllResources } from './ResourcesSlice';



const ResourcesList = () => {
    const resources = useSelector(selectAllResources);
    console.log('resources:', resources);

    return (
        <Row className='ms-auto'>
            {resources.map((resource) => {
                return(
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={resource.id}>
                        <ResourceCard resource={resource} />
                    </Col>
                );
            })}
        </Row>
        )
}

export default ResourcesList;