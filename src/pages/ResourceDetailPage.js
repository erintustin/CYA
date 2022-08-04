import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectResourceById } from '../features/Resources/ResourcesSlice';
import ResourceDetail from '../features/Resources/ResourceDetail';
import SubHeader from '../components/SubHeader';

const ResourceDetailPage = () => {
    const { resourceName } = useParams();
    const resource = useSelector(selectResourceById(resourceName));
    console.log('resource:', resource);

    return (
        <Container>
            <SubHeader current={resource.name} detail={true} />
            <Row>
                <ResourceDetail resource={resource} />
            </Row>
        </Container>
    );
};

export default ResourceDetailPage;