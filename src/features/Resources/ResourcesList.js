import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ResourceCard from "./ResourceCard";
import { selectAllResources, selectResourcesByType } from './ResourcesSlice';



const ResourcesList = () => {
    const resources = useSelector(selectAllResources);
    
    console.log('resources:', resources);

    return (
        <Row fluid='true' className='mx-auto'>
            {resources.map((resource) => {
                return(
                    <Col 
                        sm='6'
                        lg='4'
                        className='mt-2 mb-2' 
                        key={resource.id}>
                        <ResourceCard resource={resource} />
                    </Col>
                );
            })}
        </Row>
        )
}

export default ResourcesList;